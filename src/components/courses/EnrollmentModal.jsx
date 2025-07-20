import Airtable from "airtable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import { toast } from "sonner";

const base = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
}).base(import.meta.env.VITE_AIRTABLE_BASE_ID);

export default function EnrollmentModal({
  course,
  isOpen,
  onOpenChange,
  onFormSubmitSuccess,
  triggerElement,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    experience: "",
    motivation: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  const onChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setValidationErrors((prev) => ({ ...prev, [field]: undefined }));
  };
 const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required.";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email Address is invalid.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required.";
    }
    if (!formData.company.trim()) {
      errors.company = "Company/University is required.";
    }
    if (!formData.experience) {
      errors.experience = "Experience Level is required.";
    }
    if (!formData.motivation.trim()) {
      errors.motivation = "Motivation is required.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const onSubmit = async () => {
    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly.", { duration: 3000 });
      return;
    }

    try {
      await base("student-information").create([
        {
          fields: {
            "First Name": formData.firstName,
            "Last Name": formData.lastName,
            "Email address": formData.email,
            "Phone Number": formData.phone,
            "company/University": formData.company,
            "job title": formData.jobTitle,
            "experience level": formData.experience,
            "motivation": formData.motivation,
            "course enrolled": course.title,
          },
        },
      ]);

      if (onFormSubmitSuccess) {
        onFormSubmitSuccess();
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        experience: "",
        motivation: "",
      });
    } catch (error) {
      console.error("Airtable error:", error);
      
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {triggerElement}
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-black">
            {course.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill out the form below and we’ll contact you within 24 hours to
            complete your enrollment.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => onChange("firstName", e.target.value)}
                placeholder="Enter your first name"
                required
                aria-invalid={validationErrors.firstName ? "true" : "false"}
              />
              {validationErrors.firstName && (
                <p className="text-red-500 text-sm">
                  {validationErrors.firstName}
                </p>
              )}
            </div>              
               
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => onChange("lastName", e.target.value)}
                placeholder="Enter your last name"
                required
                aria-invalid={validationErrors.lastName ? "true" : "false"}
              />
              {validationErrors.lastName && (
                <p className="text-red-500 text-sm">
                  {validationErrors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="Enter your email address"
              required
              aria-invalid={validationErrors.email ? "true" : "false"}
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm">
                {validationErrors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="Enter your phone number"
              required
              aria-invalid={validationErrors.phone ? "true" : "false"}
            />
            {validationErrors.phone && (
              <p className="text-red-500 text-sm">
                {validationErrors.phone}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company/University</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => onChange("company", e.target.value)}
                placeholder="Enter your company or university"
                required
                aria-invalid={validationErrors.company ? "true" : "false"}
              />
              {validationErrors.company && (
                <p className="text-red-500 text-sm">
                  {validationErrors.company}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title/Major</Label>
              <Input
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) => onChange("jobTitle", e.target.value)}
                placeholder="Enter your job title or major"
                // required
                aria-invalid={validationErrors.jobTitle ? "true" : "false"}
              />
              {validationErrors.jobTitle && (
                <p className="text-red-500 text-sm">
                  {validationErrors.jobTitle}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level</Label>
            <Select
              onValueChange={(value) => onChange("experience", value)}
              value={formData.experience}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Entry Level (0–2 years)">
                  Entry Level (0–2 years)
                </SelectItem>
                <SelectItem value="Mid Level (3–7 years)">
                  Mid Level (3–7 years)
                </SelectItem>
                <SelectItem value="Senior Level (8–15 years)">
                  Senior Level (8–15 years)
                </SelectItem>
                <SelectItem value="Executive Level (15+ years)">
                  Executive Level (15+ years)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="motivation">
              What motivates you to take this course?
            </Label>
            <Textarea
              id="motivation"
              value={formData.motivation}
              onChange={(e) => onChange("motivation", e.target.value)}
              placeholder="Tell us about your goals and what you hope to achieve..."
              rows={4}
              required
              aria-invalid={validationErrors.motivation ? "true" : "false"}
            />
            {validationErrors.motivation && (
              <p className="text-red-500 text-sm">
                {validationErrors.motivation}
              </p>
            )}
          </div>    
          <div className="flex gap-4 pt-4">
            <Button
              onClick={onSubmit}
              className="flex-1 bg-[#319bcb] hover:bg-[#2a8bb3] text-white font-semibold py-3"
            >
              Submit Application
            </Button>
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="px-8"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
