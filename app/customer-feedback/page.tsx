"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, MessageSquare, Send, Heart } from "lucide-react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// EmailJS Configuration
// IMPORTANT: You need to create a NEW template in EmailJS dashboard for this comprehensive form
// See EMAILJS_SETUP_GUIDE.md for detailed instructions
// 
// Steps:
// 1. Go to https://www.emailjs.com/ → Email Templates → Create New Template
// 2. Copy the HTML template from EMAILJS_SETUP_GUIDE.md into the template editor
// 3. Save and copy the Template ID
// 4. Replace "YOUR_NEW_TEMPLATE_ID_HERE" below with your actual template ID
const EMAILJS_SERVICE_ID = "service_fsw1kjj"; // Your existing service ID
const EMAILJS_TEMPLATE_ID = "template_riwpg1t"; // Patient Feedback Form Template
const EMAILJS_PUBLIC_KEY = "jAlpw06qTazAWPFTh"; // Your existing public key

type FormData = {
  // Section 1: Visit Experience
  overallExperience: string;
  comfortLevel: string;
  comfortDescription: string;
  
  // Section 2: Understanding
  conditionExplanation: string;
  threePhaseUnderstanding: string;
  threePhaseConfusion: string;
  
  // Section 3: Treatment Expectations
  confidenceInApproach: string;
  confidenceConcerns: string;
  timelineComfort: string;
  timelineConcerns: string;
  
  // Section 4: Financial & Accessibility
  pricingDescription: string;
  pricingAccessibility: string[];
  pricingOther: string;
  schedulingEase: string;
  schedulingChallenges: string;
  
  // Section 5: Specialized Modalities
  modalityInformed: string;
  modalityInformationNeeds: string[];
  modalityOther: string;
  technologyImportance: string;
  
  // Section 6: Decision-Making
  decisionFactors: string[];
  decisionOther: string;
  mostImpactfulFactor: string;
  couldHaveDoneDifferently: string;
  
  // Section 7: Recommendations
  oneChange: string;
  additionalInformation: string[];
  informationOther: string;
  openToContact: string;
  preferredContactMethod: string;
  
  // Section 8: Final Thoughts
  finalThoughts: string;
  
  // Respondent Information
  respondentName: string;
  respondentEmail: string;
  respondentPhone: string;
};

export default function CustomerFeedbackPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    overallExperience: "",
    comfortLevel: "",
    comfortDescription: "",
    conditionExplanation: "",
    threePhaseUnderstanding: "",
    threePhaseConfusion: "",
    confidenceInApproach: "",
    confidenceConcerns: "",
    timelineComfort: "",
    timelineConcerns: "",
    pricingDescription: "",
    pricingAccessibility: [],
    pricingOther: "",
    schedulingEase: "",
    schedulingChallenges: "",
    modalityInformed: "",
    modalityInformationNeeds: [],
    modalityOther: "",
    technologyImportance: "",
    decisionFactors: [],
    decisionOther: "",
    mostImpactfulFactor: "",
    couldHaveDoneDifferently: "",
    oneChange: "",
    additionalInformation: [],
    informationOther: "",
    openToContact: "",
    preferredContactMethod: "",
    finalThoughts: "",
    respondentName: "",
    respondentEmail: "",
    respondentPhone: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => {
      const currentArray = (prev[name] as string[]) || [];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [name]: newArray };
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // Prevent Enter key from submitting the form
    // Allow Enter in textareas for new lines, but prevent form submission from input fields
    if (e.key === "Enter") {
      const target = e.target as HTMLElement;
      // If it's an input field (not textarea), prevent form submission
      if (target instanceof HTMLInputElement && target.type !== "submit" && target.type !== "button") {
        e.preventDefault();
      }
      // If it's a select element, prevent form submission
      if (target instanceof HTMLSelectElement) {
        e.preventDefault();
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name is now required
    if (!formData.respondentName.trim()) {
      newErrors.respondentName = "Name is required";
    } else if (formData.respondentName.trim().length < 2) {
      newErrors.respondentName = "Name must be at least 2 characters";
    }

    // Email validation if provided
    if (formData.respondentEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.respondentEmail)) {
      newErrors.respondentEmail = "Please enter a valid email address";
    }

    // Phone validation if provided
    if (formData.respondentPhone && !/^[\d\s\-\+\(\)]+$/.test(formData.respondentPhone)) {
      newErrors.respondentPhone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    
    // Scroll to first error
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0];
      const errorElement = document.getElementById(firstErrorField) || 
                          document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        (errorElement as HTMLElement).focus();
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const templateParams = {
      // Section 1
      overall_experience: formData.overallExperience || "Not provided",
      comfort_level: formData.comfortLevel || "Not provided",
      comfort_description: formData.comfortDescription || "Not provided",
      
      // Section 2
      condition_explanation: formData.conditionExplanation || "Not provided",
      three_phase_understanding: formData.threePhaseUnderstanding || "Not provided",
      three_phase_confusion: formData.threePhaseConfusion || "Not provided",
      
      // Section 3
      confidence_in_approach: formData.confidenceInApproach || "Not provided",
      confidence_concerns: formData.confidenceConcerns || "Not provided",
      timeline_comfort: formData.timelineComfort || "Not provided",
      timeline_concerns: formData.timelineConcerns || "Not provided",
      
      // Section 4
      pricing_description: formData.pricingDescription || "Not provided",
      pricing_accessibility: formData.pricingAccessibility.join(", ") || "Not provided",
      pricing_other: formData.pricingOther || "Not provided",
      scheduling_ease: formData.schedulingEase || "Not provided",
      scheduling_challenges: formData.schedulingChallenges || "Not provided",
      
      // Section 5
      modality_informed: formData.modalityInformed || "Not provided",
      modality_information_needs: formData.modalityInformationNeeds.join(", ") || "Not provided",
      modality_other: formData.modalityOther || "Not provided",
      technology_importance: formData.technologyImportance || "Not provided",
      
      // Section 6
      decision_factors: formData.decisionFactors.join(", ") || "Not provided",
      decision_other: formData.decisionOther || "Not provided",
      most_impactful_factor: formData.mostImpactfulFactor || "Not provided",
      could_have_done_differently: formData.couldHaveDoneDifferently || "Not provided",
      
      // Section 7
      one_change: formData.oneChange || "Not provided",
      additional_information: formData.additionalInformation.join(", ") || "Not provided",
      information_other: formData.informationOther || "Not provided",
      open_to_contact: formData.openToContact || "Not provided",
      preferred_contact_method: formData.preferredContactMethod || "Not provided",
      
      // Section 8
      final_thoughts: formData.finalThoughts || "Not provided",
      
      // Respondent Info
      respondent_name: formData.respondentName || "Not provided",
      respondent_email: formData.respondentEmail || "Not provided",
      respondent_phone: formData.respondentPhone || "Not provided",
    };

    // Template ID is configured: template_riwpg1t

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      if (formRef.current) formRef.current.reset();
      setFormData({
        overallExperience: "",
        comfortLevel: "",
        comfortDescription: "",
        conditionExplanation: "",
        threePhaseUnderstanding: "",
        threePhaseConfusion: "",
        confidenceInApproach: "",
        confidenceConcerns: "",
        timelineComfort: "",
        timelineConcerns: "",
        pricingDescription: "",
        pricingAccessibility: [],
        pricingOther: "",
        schedulingEase: "",
        schedulingChallenges: "",
        modalityInformed: "",
        modalityInformationNeeds: [],
        modalityOther: "",
        technologyImportance: "",
        decisionFactors: [],
        decisionOther: "",
        mostImpactfulFactor: "",
        couldHaveDoneDifferently: "",
        oneChange: "",
        additionalInformation: [],
        informationOther: "",
        openToContact: "",
        preferredContactMethod: "",
        finalThoughts: "",
        respondentName: "",
        respondentEmail: "",
        respondentPhone: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send feedback:", error);
      setErrors({ submit: "Failed to send feedback. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const RadioGroup = ({ name, options, value, onChange }: {
    name: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
  }) => (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option}
          className={`flex items-start space-x-3 cursor-pointer group p-3 rounded-lg transition-all duration-200 ${
            value === option
              ? "bg-blue-50 border-2 border-blue-200 shadow-sm"
              : "hover:bg-gray-50 border-2 border-transparent"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1 w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          />
          <span className={`flex-1 text-sm leading-relaxed ${
            value === option ? "text-gray-900 font-medium" : "text-gray-700"
          } group-hover:text-gray-900`}>
            {option}
          </span>
        </label>
      ))}
    </div>
  );

  const CheckboxGroup = ({ name, options, values, onChange }: {
    name: string;
    options: string[];
    values: string[];
    onChange: (value: string) => void;
  }) => (
    <div className="space-y-2">
      {options.map((option) => {
        const isChecked = values.includes(option);
        return (
          <label
            key={option}
            className={`flex items-start space-x-3 cursor-pointer group p-3 rounded-lg transition-all duration-200 ${
              isChecked
                ? "bg-teal-50 border-2 border-teal-200 shadow-sm"
                : "hover:bg-gray-50 border-2 border-transparent"
            }`}
          >
            <Checkbox
              checked={isChecked}
              onCheckedChange={() => onChange(option)}
              className="mt-1"
            />
            <span className={`flex-1 text-sm leading-relaxed ${
              isChecked ? "text-gray-900 font-medium" : "text-gray-700"
            } group-hover:text-gray-900`}>
              {option}
            </span>
          </label>
        );
      })}
    </div>
  );

  return (
    <>
      <LandingNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#004f8c] to-[#008094] py-16 md:py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              VITALPHYSIO+ PATIENT FEEDBACK FORM
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
              Your Insights Matter to Us
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left text-white/95 max-w-3xl mx-auto">
              <p className="mb-4">
                <strong>Dear Valued Visitor,</strong>
              </p>
              <p className="mb-4">
                Thank you for visiting VitalPhysio+ and for considering us as your partner in your health journey. 
                We recognize that your decision to proceed with treatment involves careful consideration, and we 
                genuinely appreciate you taking the time to experience our clinic and care approach.
              </p>
              <p className="mb-4">
                Your honest feedback is invaluable to us. We are committed to continuously improving our services 
                and understanding the barriers that may prevent patients from taking the next step.
              </p>
              <p>
                We genuinely value your perspective and would be deeply grateful if you could spare 5-7 minutes 
                to complete this form.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 rounded-full p-4">
                  <CheckCircle2 className="w-16 h-16 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You for Your Feedback!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We've received your valuable feedback and truly appreciate you taking the time to share your 
                experience with us. Your insights will directly shape how we serve you and future patients better.
              </p>
              <Button
                onClick={() => setSent(false)}
                variant="outline"
                className="mt-4"
              >
                Submit Another Feedback
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10"
            >
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                onKeyDown={handleKeyDown}
                className="space-y-10"
              >
                {/* SECTION 1: YOUR VISIT EXPERIENCE */}
                <div className="border-b border-gray-200 pb-8 scroll-mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                      1
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      YOUR VISIT EXPERIENCE
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        1.1 How would you rate your overall experience during your initial consultation at VitalPhysio+?
                      </Label>
                      <RadioGroup
                        name="overallExperience"
                        options={[
                          "Excellent",
                          "Very Good",
                          "Good",
                          "Satisfactory",
                          "Needs Improvement"
                        ]}
                        value={formData.overallExperience}
                        onChange={(value) => setFormData(prev => ({ ...prev, overallExperience: value }))}
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        1.2 How comfortable did you feel during your visit?
                      </Label>
                      <RadioGroup
                        name="comfortLevel"
                        options={[
                          "Very Comfortable",
                          "Comfortable",
                          "Neutral",
                          "Somewhat Uncomfortable",
                          "Very Uncomfortable"
                        ]}
                        value={formData.comfortLevel}
                        onChange={(value) => setFormData(prev => ({ ...prev, comfortLevel: value }))}
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        1.3 Please briefly describe what made you feel this way (if "Neutral" or uncomfortable):
                      </Label>
                      <textarea
                        name="comfortDescription"
                        value={formData.comfortDescription}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-400 focus-visible:ring-offset-2 resize-y transition-all duration-200"
                        placeholder="Please share your thoughts..."
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 2: UNDERSTANDING OF YOUR CONDITION & TREATMENT */}
                <div className="border-b border-gray-200 pb-8 scroll-mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                      2
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      UNDERSTANDING OF YOUR CONDITION & TREATMENT
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        2.1 How clearly was your condition explained to you?
                      </Label>
                      <RadioGroup
                        name="conditionExplanation"
                        options={[
                          "Crystal Clear - I understood everything",
                          "Clear - I understood most of it",
                          "Moderate - Some parts were unclear",
                          "Unclear - I'm still confused about key aspects",
                          "Very Unclear - I didn't understand the explanation"
                        ]}
                        value={formData.conditionExplanation}
                        onChange={(value) => setFormData(prev => ({ ...prev, conditionExplanation: value }))}
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        2.2 How well did you understand the three-phase approach to treatment (Phase 1: Symptom Relief → Phase 2: Tissue Healing → Phase 3: Functional Restoration)?
                      </Label>
                      <RadioGroup
                        name="threePhaseUnderstanding"
                        options={[
                          "Perfectly Clear - The logic and benefits are obvious",
                          "Clear - I understand the approach",
                          "Somewhat Clear - I have some questions",
                          "Unclear - I'm not sure why this approach is necessary",
                          "Confusing - I don't see the value of this progression"
                        ]}
                        value={formData.threePhaseUnderstanding}
                        onChange={(value) => setFormData(prev => ({ ...prev, threePhaseUnderstanding: value }))}
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        2.3 If you selected "Unclear" or "Confusing" above, what specifically was confusing?
                      </Label>
                      <textarea
                        name="threePhaseConfusion"
                        value={formData.threePhaseConfusion}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-400 focus-visible:ring-offset-2 resize-y transition-all duration-200"
                        placeholder="Please explain what was confusing..."
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 3: TREATMENT EXPECTATIONS & COMMITMENT */}
                <div className="border-b border-gray-200 pb-8 scroll-mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                      3
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      TREATMENT EXPECTATIONS & COMMITMENT
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        3.1 How confident are you that VitalPhysio+'s approach will address your specific condition?
                      </Label>
                      <RadioGroup
                        name="confidenceInApproach"
                        options={[
                          "Very Confident - I believe this will help me",
                          "Confident - I think this will work",
                          "Somewhat Confident - Hopeful but with some doubt",
                          "Not Very Confident - I have significant doubts",
                          "Not Confident At All - I don't believe this will work"
                        ]}
                        value={formData.confidenceInApproach}
                        onChange={(value) => setFormData(prev => ({ ...prev, confidenceInApproach: value }))}
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        3.2 If not very confident, what are your primary concerns about the treatment's effectiveness?
                      </Label>
                      <textarea
                        name="confidenceConcerns"
                        value={formData.confidenceConcerns}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-400 focus-visible:ring-offset-2 resize-y transition-all duration-200"
                        placeholder="Please share your concerns..."
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        3.3 How comfortable are you with the expected timeline and frequency of physiotherapy sessions required for your condition?
                      </Label>
                      <RadioGroup
                        name="timelineComfort"
                        options={[
                          "Very Comfortable - Timeline and frequency work well for me",
                          "Comfortable - I can manage the commitment",
                          "Somewhat Concerned - I have some scheduling challenges",
                          "Very Concerned - The commitment feels overwhelming",
                          "Unable to Commit - The time/frequency is not feasible for me"
                        ]}
                        value={formData.timelineComfort}
                        onChange={(value) => setFormData(prev => ({ ...prev, timelineComfort: value }))}
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        3.4 If you have concerns about timeline or frequency, please explain:
                      </Label>
                      <textarea
                        name="timelineConcerns"
                        value={formData.timelineConcerns}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-400 focus-visible:ring-offset-2 resize-y transition-all duration-200"
                        placeholder="Please explain your concerns..."
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 4: FINANCIAL & ACCESSIBILITY FACTORS */}
                <div className="border-b border-gray-200 pb-8 scroll-mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                      4
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      FINANCIAL & ACCESSIBILITY FACTORS
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        4.1 How would you describe the pricing of VitalPhysio+ services?
                      </Label>
                      <RadioGroup
                        name="pricingDescription"
                        options={[
                          "Fair for the specialized care and modalities offered",
                          "Acceptable, but at the higher end",
                          "Higher than expected",
                          "Significantly higher than other clinics in Bengaluru",
                          "Beyond my current budget"
                        ]}
                        value={formData.pricingDescription}
                        onChange={(value) => setFormData(prev => ({ ...prev, pricingDescription: value }))}
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        4.2 If price is a concern, what would make the services more accessible to you?
                      </Label>
                      <CheckboxGroup
                        name="pricingAccessibility"
                        options={[
                          "Lower overall cost per session",
                          "Package discounts for commitment",
                          "Flexible payment plans",
                          "Transparent breakdown of costs and what you pay for",
                          "Insurance coverage or reimbursement assistance"
                        ]}
                        values={formData.pricingAccessibility}
                        onChange={(value) => handleCheckboxChange("pricingAccessibility", value)}
                      />
                      <div className="mt-3">
                        <Input
                          name="pricingOther"
                          value={formData.pricingOther}
                          onChange={handleInputChange}
                          placeholder="Other (please specify)"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        4.3 How easy was it to schedule an appointment and visit the clinic?
                      </Label>
                      <RadioGroup
                        name="schedulingEase"
                        options={[
                          "Very Easy",
                          "Easy",
                          "Moderate",
                          "Challenging",
                          "Very Challenging"
                        ]}
                        value={formData.schedulingEase}
                        onChange={(value) => setFormData(prev => ({ ...prev, schedulingEase: value }))}
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        4.4 If you experienced challenges, what were they?
                      </Label>
                      <textarea
                        name="schedulingChallenges"
                        value={formData.schedulingChallenges}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-400 focus-visible:ring-offset-2 resize-y transition-all duration-200"
                        placeholder="Please describe the challenges..."
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 5: PERCEIVED VALUE OF SPECIALIZED MODALITIES */}
                <div className="border-b border-gray-200 pb-8 scroll-mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                      5
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      PERCEIVED VALUE OF SPECIALIZED MODALITIES
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        5.1 How informed do you feel about the unique treatment modalities at VitalPhysio+ (such as the water treadmill and other advanced equipment)?
                      </Label>
                      <RadioGroup
                        name="modalityInformed"
                        options={[
                          "Very Well Informed - I understand the benefits for my condition",
                          "Well Informed - I have a good grasp of what's available",
                          "Moderately Informed - I know they exist but not sure how they help me",
                          "Poorly Informed - I don't understand why these modalities matter",
                          "Not Informed At All - I didn't learn much about them"
                        ]}
                        value={formData.modalityInformed}
                        onChange={(value) => setFormData(prev => ({ ...prev, modalityInformed: value }))}
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        5.2 If you're not familiar with these specialized modalities, would you benefit from:
                      </Label>
                      <CheckboxGroup
                        name="modalityInformationNeeds"
                        options={[
                          "More detailed explanations of how each modality addresses my condition",
                          "Evidence-based information about outcomes",
                          "Visual demonstrations or videos",
                          "Comparison with standard physiotherapy approaches",
                          "Case studies showing patient results"
                        ]}
                        values={formData.modalityInformationNeeds}
                        onChange={(value) => handleCheckboxChange("modalityInformationNeeds", value)}
                      />
                      <div className="mt-3">
                        <Input
                          name="modalityOther"
                          value={formData.modalityOther}
                          onChange={handleInputChange}
                          placeholder="Other (please specify)"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        5.3 How important is having access to the latest technology and equipment in your treatment decision?
                      </Label>
                      <RadioGroup
                        name="technologyImportance"
                        options={[
                          "Very Important - I want cutting-edge care",
                          "Important - It's a factor in my decision",
                          "Somewhat Important - It's nice to have but not essential",
                          "Not Important - I'm more concerned about outcomes than equipment",
                          "Neutral - It doesn't influence my decision either way"
                        ]}
                        value={formData.technologyImportance}
                        onChange={(value) => setFormData(prev => ({ ...prev, technologyImportance: value }))}
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 6: DECISION-MAKING FACTORS */}
                <div className="border-b border-gray-200 pb-8 scroll-mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                      6
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      DECISION-MAKING FACTORS
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        6.1 Which of the following influenced your decision NOT to start treatment immediately? (Select all that apply)
                      </Label>
                      <CheckboxGroup
                        name="decisionFactors"
                        options={[
                          "Need more time to decide",
                          "Want to explore other options first",
                          "Cost concerns",
                          "Uncertain about the approach or methodology",
                          "Scheduling or time commitment challenges",
                          "Skepticism about the need for three phases",
                          "Prefer traditional/conventional physiotherapy",
                          "Want to check reviews and patient testimonials first",
                          "Condition not severe enough to warrant investment",
                          "Need to discuss with family or doctor first"
                        ]}
                        values={formData.decisionFactors}
                        onChange={(value) => handleCheckboxChange("decisionFactors", value)}
                      />
                      <div className="mt-3">
                        <Input
                          name="decisionOther"
                          value={formData.decisionOther}
                          onChange={handleInputChange}
                          placeholder="Other (please specify)"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        6.2 What single factor had the MOST impact on your decision?
                      </Label>
                      <textarea
                        name="mostImpactfulFactor"
                        value={formData.mostImpactfulFactor}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-400 focus-visible:ring-offset-2 resize-y transition-all duration-200"
                        placeholder="Please describe the most impactful factor..."
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        6.3 Is there anything the VitalPhysio+ team could have done differently during your visit to encourage you to start treatment?
                      </Label>
                      <textarea
                        name="couldHaveDoneDifferently"
                        value={formData.couldHaveDoneDifferently}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-400 focus-visible:ring-offset-2 resize-y transition-all duration-200"
                        placeholder="Please share your thoughts..."
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 7: RECOMMENDATIONS FOR IMPROVEMENT */}
                <div className="border-b border-gray-200 pb-8 scroll-mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                      7
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      RECOMMENDATIONS FOR IMPROVEMENT
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        7.1 If you were to recommend one change or improvement at VitalPhysio+, what would it be?
                      </Label>
                      <textarea
                        name="oneChange"
                        value={formData.oneChange}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-400 focus-visible:ring-offset-2 resize-y transition-all duration-200"
                        placeholder="Please share your recommendation..."
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        7.2 What type of additional information or support would have helped you make a confident decision to proceed with treatment?
                      </Label>
                      <CheckboxGroup
                        name="additionalInformation"
                        options={[
                          "More detailed explanation of expected outcomes for my condition",
                          "Success stories or patient testimonials",
                          "Comparison of VitalPhysio+'s approach vs. standard physiotherapy",
                          "Clear pricing transparency and payment options",
                          "Detailed session-by-session breakdown of a typical treatment plan",
                          "Information about what to expect at each phase",
                          "Consultation with treating physiotherapist before committing",
                          "Trial session to experience the approach",
                          "More time during initial consultation"
                        ]}
                        values={formData.additionalInformation}
                        onChange={(value) => handleCheckboxChange("additionalInformation", value)}
                      />
                      <div className="mt-3">
                        <Input
                          name="informationOther"
                          value={formData.informationOther}
                          onChange={handleInputChange}
                          placeholder="Other (please specify)"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        7.3 Are you open to being contacted by our team if we've developed solutions to your concerns?
                      </Label>
                      <RadioGroup
                        name="openToContact"
                        options={[
                          "Yes, I'd welcome follow-up",
                          "Maybe, depending on the contact method",
                          "Prefer not to be contacted",
                          "Undecided"
                        ]}
                        value={formData.openToContact}
                        onChange={(value) => setFormData(prev => ({ ...prev, openToContact: value }))}
                      />
                      {(formData.openToContact === "Yes, I'd welcome follow-up" || formData.openToContact === "Maybe, depending on the contact method") && (
                        <div className="mt-4">
                          <Label className="text-sm font-medium mb-2 block">
                            Preferred contact method:
                          </Label>
                          <RadioGroup
                            name="preferredContactMethod"
                            options={["Phone", "Email", "WhatsApp"]}
                            value={formData.preferredContactMethod}
                            onChange={(value) => setFormData(prev => ({ ...prev, preferredContactMethod: value }))}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* SECTION 8: FINAL THOUGHTS */}
                <div className="border-b border-gray-200 pb-8 scroll-mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                      8
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      FINAL THOUGHTS
                    </h2>
                  </div>
                  
                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      8.1 If there's anything else you'd like us to know about your visit experience or your concerns about starting treatment, please share it here:
                    </Label>
                    <textarea
                      name="finalThoughts"
                      value={formData.finalThoughts}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                      placeholder="Please share any additional thoughts or concerns..."
                    />
                  </div>
                </div>

                {/* RESPONDENT INFORMATION */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 border border-blue-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    RESPONDENT INFORMATION
                  </h2>
                  <p className="text-sm text-gray-600 mb-6">
                    This information helps us follow up on your feedback and address specific concerns. 
                    Your information will be kept confidential.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="respondentName">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="respondentName"
                        name="respondentName"
                        type="text"
                        value={formData.respondentName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className={errors.respondentName ? "border-red-500 focus-visible:ring-red-500" : ""}
                        aria-invalid={!!errors.respondentName}
                        aria-describedby={errors.respondentName ? "respondentName-error" : undefined}
                      />
                      {errors.respondentName && (
                        <p id="respondentName-error" className="text-sm text-red-600 flex items-center gap-1">
                          <span className="text-red-500">⚠</span> {errors.respondentName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="respondentEmail">Email (Optional)</Label>
                      <Input
                        id="respondentEmail"
                        name="respondentEmail"
                        type="email"
                        value={formData.respondentEmail}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className={errors.respondentEmail ? "border-red-500 focus-visible:ring-red-500" : ""}
                        aria-invalid={!!errors.respondentEmail}
                        aria-describedby={errors.respondentEmail ? "respondentEmail-error" : undefined}
                      />
                      {errors.respondentEmail && (
                        <p id="respondentEmail-error" className="text-sm text-red-600 flex items-center gap-1">
                          <span className="text-red-500">⚠</span> {errors.respondentEmail}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="respondentPhone">Phone (Optional)</Label>
                      <Input
                        id="respondentPhone"
                        name="respondentPhone"
                        type="tel"
                        value={formData.respondentPhone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={errors.respondentPhone ? "border-red-500 focus-visible:ring-red-500" : ""}
                        aria-invalid={!!errors.respondentPhone}
                        aria-describedby={errors.respondentPhone ? "respondentPhone-error" : undefined}
                      />
                      {errors.respondentPhone && (
                        <p id="respondentPhone-error" className="text-sm text-red-600 flex items-center gap-1">
                          <span className="text-red-500">⚠</span> {errors.respondentPhone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {errors.submit && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-6"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">⚠️</span>
                      <div>
                        <p className="text-sm font-semibold text-red-800 mb-1">Submission Error</p>
                        <p className="text-sm text-red-600">{errors.submit}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="pt-6 border-t-2 border-gray-200">
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 mb-6 border border-blue-100">
                    <p className="text-sm font-semibold text-gray-800 mb-3">
                      CLOSING NOTE
                    </p>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      Thank you for taking the time to provide this valuable feedback. Your insights will directly 
                      shape how we serve you and future patients better. We remain committed to providing the most 
                      comprehensive, evidence-based, and compassionate physiotherapy care in Bengaluru.
                    </p>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      Should you change your mind or wish to discuss any aspect of your treatment plan, please don't 
                      hesitate to reach out. We genuinely want to support your journey to better health.
                    </p>
                    <p className="text-sm text-gray-800 font-medium">
                      <strong>Warm regards,</strong><br />
                      <span className="text-gray-700">Dr K S Chandraprakash & VitalPhysio+ Team</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600">
                      <p className="font-medium text-gray-700 mb-1">Ready to submit?</p>
                      <p>Please review your responses before submitting.</p>
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[250px] bg-gradient-to-r from-[#008094] to-[#004f8c] hover:from-[#0099aa] hover:to-[#005fa3] text-white font-semibold py-6 px-8 text-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting Feedback...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Feedback
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
