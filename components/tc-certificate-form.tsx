"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, Check, AlertCircle } from "lucide-react"

export default function TCCertificateForm() {
  const [formData, setFormData] = useState({
    admissionNumber: "",
    studentName: "",
    dateOfBirth: "",
    fatherName: "",
    motherName: "",
    lastClassAttended: "",
    reasonForLeaving: "",
    parentEmail: "",
    parentPhone: "",
    deliveryMode: "school",
    certificateImage: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        certificateImage: file,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const googleFormURL = "https://docs.google.com/forms/u/0/d/e/YOUR_TC_FORM_ID/formResponse"

      const params = new URLSearchParams()
      params.append("entry.YOUR_ADMISSION_NUMBER_ID", formData.admissionNumber)
      params.append("entry.YOUR_STUDENT_NAME_ID", formData.studentName)
      params.append("entry.YOUR_DOB_ID", formData.dateOfBirth)
      params.append("entry.YOUR_FATHER_NAME_ID", formData.fatherName)
      params.append("entry.YOUR_MOTHER_NAME_ID", formData.motherName)
      params.append("entry.YOUR_LAST_CLASS_ID", formData.lastClassAttended)
      params.append("entry.YOUR_REASON_ID", formData.reasonForLeaving)
      params.append("entry.YOUR_EMAIL_ID", formData.parentEmail)
      params.append("entry.YOUR_PHONE_ID", formData.parentPhone)
      params.append("entry.YOUR_DELIVERY_MODE_ID", formData.deliveryMode)

      await fetch(googleFormURL, {
        method: "POST",
        body: params,
        mode: "no-cors",
      })

      setSubmitStatus("success")
      setStatusMessage(
        "Your TC Certificate request has been submitted successfully! Check your email for confirmation.",
      )
      formRef.current?.reset()
      setFormData({
        admissionNumber: "",
        studentName: "",
        dateOfBirth: "",
        fatherName: "",
        motherName: "",
        lastClassAttended: "",
        reasonForLeaving: "",
        parentEmail: "",
        parentPhone: "",
        deliveryMode: "school",
        certificateImage: null,
      })

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage("Error submitting form. Please try again.")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
      {/* Student Information */}
      <div>
        <h3 className="text-lg font-bold text-blue-900 mb-4 pb-2 border-b border-slate-200">Student Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Admission Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="admissionNumber"
              value={formData.admissionNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300"
              placeholder="e.g., DPS-2020-001"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Student Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300"
              placeholder="Full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Last Class Attended <span className="text-red-500">*</span>
            </label>
            <select
              name="lastClassAttended"
              value={formData.lastClassAttended}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300 bg-white"
            >
              <option value="">Select class</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
              <option value="Class 4">Class 4</option>
              <option value="Class 5">Class 5</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
            </select>
          </div>
        </div>
      </div>

      {/* Parent Information
      <div>
        <h3 className="text-lg font-bold text-blue-900 mb-4 pb-2 border-b border-slate-200">Parent Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300"
              placeholder="Father's full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300"
              placeholder="Mother's full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300"
              placeholder="+91 XXXXXXXXXX"
            />
          </div>
        </div>
      </div> */}

      {/* Additional Information */}
      <div>
        <h3 className="text-lg font-bold text-blue-900 mb-4 pb-2 border-b border-slate-200">Additional Information</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Reason for Leaving</label>
            <textarea
              name="reasonForLeaving"
              value={formData.reasonForLeaving}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300"
              placeholder="Brief reason for leaving school"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Delivery Mode <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors duration-300">
                <input
                  type="radio"
                  name="deliveryMode"
                  value="school"
                  checked={formData.deliveryMode === "school"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-700"
                />
                <span className="text-slate-700">Collect from School</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors duration-300">
                <input
                  type="radio"
                  name="deliveryMode"
                  value="email"
                  checked={formData.deliveryMode === "email"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-700"
                />
                <span className="text-slate-700">Send via Email (Digital Copy)</span>
              </label>
            </div>
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Upload Reference Image (Optional)</label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-700 hover:bg-blue-50 transition-all duration-300"
            >
              <Upload className="mx-auto mb-2 text-slate-400" size={32} />
              <p className="text-slate-600 font-medium">Click to upload or drag and drop</p>
              <p className="text-slate-500 text-sm">PNG, JPG, GIF up to 10MB</p>
              {formData.certificateImage && (
                <p className="text-green-600 mt-2 font-medium">{formData.certificateImage.name}</p>
              )}
            </div>
            <input ref={fileInputRef} type="file" onChange={handleFileChange} accept="image/*" className="hidden" />
          </div> */}
        </div>
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 animate-fade-in-up">
          <Check className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-green-900">Request Submitted Successfully!</p>
            <p className="text-green-700 text-sm">{statusMessage}</p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 animate-fade-in-up">
          <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-red-900">Submission Error</p>
            <p className="text-red-700 text-sm">{statusMessage}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-rotate-spin" />
            Processing...
          </>
        ) : (
          "Submit TC Request"
        )}
      </button>

      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you agree to our terms and conditions. Your information will be processed according to
        our privacy policy.
      </p>
    </form>
  )
}
