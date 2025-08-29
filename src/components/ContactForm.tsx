"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, Mail, Phone, MapPin, Github, Linkedin, Download, Copy, Paperclip, X } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type ContactForm = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  apiEndpoint?: string
  className?: string
}

export default function ContactForm({ 
  apiEndpoint = "/api/contact",
  className 
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [attachedFile, setAttachedFile] = useState<File | null>(null)

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(data: ContactForm) {
    setIsSubmitting(true)
    
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
      })
      
      if (attachedFile) {
        formData.append("attachment", attachedFile)
      }

      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || "Failed to send message")
      }

      toast.success("Message sent successfully! I'll get back to you soon.")
      form.reset()
      setAttachedFile(null)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB")
      return
    }

    // Validate file type (common resume formats)
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain"
    ]
    
    if (!allowedTypes.includes(file.type)) {
      toast.error("Please upload a PDF, DOC, DOCX, or TXT file")
      return
    }

    setAttachedFile(file)
    toast.success("File attached successfully")
  }

  const removeAttachment = () => {
    setAttachedFile(null)
    toast.success("File removed")
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@example.com")
      toast.success("Email copied to clipboard")
    } catch {
      toast.error("Failed to copy email")
    }
  }

  const callPhone = () => {
    window.location.href = "tel:+1234567890"
    toast.success("Opening phone dialer")
  }

  return (
    <div className={`grid gap-8 lg:grid-cols-2 ${className}`}>
      {/* Contact Form */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-2xl font-display">Get in Touch</CardTitle>
          <CardDescription>
            Send me a message and I&#39;ll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          aria-invalid={!!form.formState.errors.name}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your.email@example.com" 
                          type="email"
                          {...field} 
                          aria-invalid={!!form.formState.errors.email}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="What's this about?" 
                        {...field} 
                        aria-invalid={!!form.formState.errors.subject}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project or inquiry..."
                        className="min-h-[120px] resize-none"
                        {...field} 
                        aria-invalid={!!form.formState.errors.message}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* File Attachment
              <div className="space-y-3">
                <label className="text-sm font-medium">
                  Attachment <span className="text-muted-foreground">(optional)</span>
                </label>
                
                {attachedFile ? (
                  <div className="flex items-center gap-2 rounded-md border p-3">
                    <Paperclip className="h-4 w-4 text-muted-foreground" />
                    <span className="flex-1 text-sm truncate">{attachedFile.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={removeAttachment}
                      className="h-6 w-6 p-0"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ) : (
                  <div className="relative">
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.txt"
                      className="cursor-pointer"
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      PDF, DOC, DOCX, or TXT files up to 5MB
                    </p>
                  </div>
                )} 
                
                <p className="text-xs text-muted-foreground">
                  Note: File attachments require server-side implementation
                </p>
              </div> */}

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Contact Card */}
      <Card className="bg-card h-fit">
        <CardHeader>
          <CardTitle className="text-xl font-display">Contact Information</CardTitle>
          <CardDescription>
            Prefer direct contact? Here are other ways to reach me.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">omdarshanpatil@gmail.com</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyEmail}
                className="h-8"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+91 9359037001</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={callPhone}
                className="h-8"
              >
                Call
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Indapur 413106, Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex gap-2">
              <a 
                href="https://github.com/omdarshan-4964" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" size="sm" className="flex-1">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/omdarshanshindepatil/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" size="sm" className="w-full">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Resume Download */}
          <a href="/resume.pdf" download className="block mt-4">
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
