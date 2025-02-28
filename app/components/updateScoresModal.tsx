import React, { useContext, useState } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormDataContext } from "../context/formDataContext";

type FormFields = "rank" | "percentile" | "currentScore";

interface UpdateScoresFormProps {
  onCancel?: () => void;
  onSubmitSuccess?: () => void;
}

const UpdateScoresForm: React.FC<UpdateScoresFormProps> = ({
  onCancel,
  onSubmitSuccess,
}) => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("UpdateScoresForm must be used within a FormDataProvider");
  }
  const { formData, setFormData } = context;

  const [errors, setErrors] = useState<Record<FormFields, string>>({
    rank: "",
    percentile: "",
    currentScore: "",
  });

  const validateField = (name: FormFields, value: string) => {
    let error = "";

    if (!value) {
      error = `required | should be a number`;
    } else if (isNaN(Number(value))) {
      error = `${name} must be a number`;
    } else {
      const numValue = parseInt(value);
      if (name === "rank" && numValue < 1) {
        error = "required rank > 0";
      } else if (name === "percentile" && (numValue < 0 || numValue > 100)) {
        error = "required percentile 0-100";
      } else if (name === "currentScore" && (numValue < 0 || numValue > 15)) {
        error = "required score 0-15";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: FormFields; value: string };
    validateField(name, value);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target as { name: FormFields };
    if (!formData[name]) {
      setErrors((prev) => ({ ...prev, [name]: `required ${name}` }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: FormFields; value: string };
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (!value) {
      if (name === "rank") {
        setErrors((prev) => ({
          ...prev,
          [name]: `required | should be a number`,
        }));
      } else if (name === "percentile") {
        setErrors((prev) => ({
          ...prev,
          [name]: `required | percentile 0-100`,
        }));
      } else if (name === "currentScore") {
        setErrors((prev) => ({
          ...prev,
          [name]: `required | score 0-15`,
        }));
      }
    } else {
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    (Object.keys(formData) as FormFields[]).forEach((field) => {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });

    if (isValid) {
      console.log("Form submitted:", formData);
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    }
  };

  return (
    <Card className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] rounded-md shadow-md">
      <CardHeader className="pb-2 border-b border-gray-200 flex items-center justify-between">
        <CardTitle className="text-xl font-bold">Update scores</CardTitle>
        <Image src="/asset/HTML5.png" alt="HTML5 Icon" width={40} height={40} />
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {["rank", "percentile", "currentScore"].map((field, index) => (
            <div key={field}>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">
                  {index + 1}
                </div>
                <label className="font-medium">
                  {`Update your ${
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }`}
                </label>
              </div>
              <Input
                name={field}
                value={formData[field as FormFields]}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className={`${
                  errors[field as FormFields]
                    ? "border-red-500 focus:ring-red-500"
                    : ""
                }`}
              />
              {errors[field as FormFields] && (
                <p className="text-sm text-red-500 mt-1">
                  {errors[field as FormFields]}
                </p>
              )}
            </div>
          ))}

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              onClick={onCancel}
              className="bg-white !text-blue-600 border border-blue-600 hover:bg-blue-50"
            >
              cancel
            </Button>
            <Button type="submit" className="bg-blue-600 text-white">
              save →
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UpdateScoresForm;
