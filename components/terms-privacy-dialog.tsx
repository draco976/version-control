"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TermsPrivacyDialogProps {
  children: React.ReactNode
}

export function TermsPrivacyDialog({ children }: TermsPrivacyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms and Privacy</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-gray-600 mb-4">
                This agreement describes the conditions and rules under which ContextFort Inc. ("our company", "we") offers you its services at contextfort.ai (the "Service").
              </p>
              <p className="text-gray-600 mb-4">
                This agreement will be governed by the laws of the State of Delaware, USA, without reference to conflict of laws principles. You agree that any litigation relating to this agreement may only be brought in, and shall be subject to the jurisdiction of the state or federal courts located in the State of Delaware.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Terms</h3>
              <p className="mb-3">
                By using the services of contextfort.ai, you agree to the following conditions:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-1">Use at Your Own Risk</h4>
                  <p className="text-gray-600">Use of the contextfort.ai service is at your own risk.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Responsibility for Uploaded Data</h4>
                  <p className="text-gray-600">You bear full responsibility for any documents, files, or other content transmitted to contextfort.ai servers.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Prohibited Content</h4>
                  <p className="text-gray-600">You agree not to upload, process, or share any illegal, infringing, or malicious materials.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Integration Restrictions</h4>
                  <p className="text-gray-600">You agree not to integrate contextfort.ai into your own or third-party applications without prior written consent from us.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Permitted Uses</h4>
                  <p className="text-gray-600">You may use contextfort.ai for personal, educational, or commercial purposes, provided that such use complies with these terms.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Service Changes</h4>
                  <p className="text-gray-600">We reserve the right to change, suspend, or discontinue any part of the contextfort.ai service at any time without prior notice.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Terms Updates</h4>
                  <p className="text-gray-600">We may modify these terms at any time without prior notice. Continued use of the Service constitutes acceptance of the updated terms.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">No Guarantees</h4>
                  <p className="text-gray-600">The contextfort.ai service is provided "as is" without any warranties or guarantees of any kind.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Privacy</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-1">Temporary Storage</h4>
                  <p className="text-gray-600">Uploaded files and generated comparison results are stored temporarily (for up to 24 hours) solely to provide the Service, after which they are permanently deleted, unless you explicitly choose to save them in your account.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">No Unauthorized Access</h4>
                  <p className="text-gray-600">Your uploaded content will not be accessed, reviewed, or shared by our company, except where required by law or for technical troubleshooting.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Metadata Collection</h4>
                  <p className="text-gray-600">We may collect and analyze metadata (such as file size, number of changes detected, and processing time) to improve service performance and security.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Cookies & Analytics</h4>
                  <p className="text-gray-600">We use cookies and analytics tools to understand usage patterns and improve the Service. By using contextfort.ai, you consent to our use of cookies.</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Third-Party Services</h4>
                  <p className="text-gray-600">Our hosting, analytics, and authentication providers may collect data in accordance with their own privacy policies.</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4 mt-6">
              <div className="text-center text-gray-600">
                <p className="font-medium">ContextFort Inc.</p>
                <p>2660 3rd Street, #614</p>
                <p>San Francisco, CA 94107</p>
                <p>United States</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
