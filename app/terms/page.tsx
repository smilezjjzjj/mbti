import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Scale,
  Users,
  Gavel
} from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-1">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <FileText className="h-4 w-4 mr-2" />
            Terms of Service
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to the MBTI Personality Interpretation Platform. Please read the following terms of service carefully. Using our service indicates that you agree to comply with these terms.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: December 2024
          </div>
        </div>

        {/* Service Overview */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
              Service Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Our services include:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>AI-powered MBTI personality type interpretation services</li>
                <li>Personalized career development advice and analysis</li>
                <li>Interpersonal relationship and communication style guidance</li>
                <li>Personal growth and potential development suggestions</li>
                <li>Related psychological knowledge and information</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Service Nature</h4>
              <p className="text-green-800 text-sm">
                Our services are for reference and entertainment purposes only and cannot replace professional psychological counseling or medical advice.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Users className="h-6 w-6 mr-3 text-blue-600" />
              User Responsibilities and Obligations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">When using our services, you agree to:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide accurate and truthful information</li>
                <li>Not abuse or excessively use our services</li>
                <li>Not attempt to damage or interfere with the normal operation of the website</li>
                <li>Not use automated tools or scripts to access our services</li>
                <li>Comply with relevant laws, regulations, and social moral standards</li>
                <li>Respect others' privacy and rights</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Prohibited behaviors:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Publishing false, misleading, or malicious content</li>
                <li>Infringing on others' intellectual property rights</li>
                <li>Conducting any form of cyber attacks</li>
                <li>Spreading viruses or malicious software</li>
                <li>Collecting other users' personal information</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Scale className="h-6 w-6 mr-3 text-purple-600" />
              Intellectual Property
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Our Rights:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>All content, design, code, and features on the website are our intellectual property</li>
                <li>Users may not copy, distribute, or commercially use our content without authorization</li>
                <li>Our brand name, logo, and related marks are protected by trademark law</li>
                <li>AI-generated analysis content is jointly owned by us and users</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Your Rights:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>You own the copyright to your personal analysis results</li>
                <li>You may share your analysis results for non-commercial purposes</li>
                <li>You may provide feedback and suggestions for service improvement</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Open Source</h4>
              <p className="text-purple-800 text-sm">
                This project is open source on GitHub. You may view, learn from, and contribute to the code under the open source license, but commercial use requires separate authorization.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <AlertTriangle className="h-6 w-6 mr-3 text-orange-600" />
              Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Service Limitations:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Our analysis results are for reference only and we do not guarantee 100% accuracy</li>
                <li>AI technology may have limitations and biases</li>
                <li>Different test results may vary</li>
                <li>We are not responsible for decisions made based on analysis results</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Technical Limitations:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Services may be temporarily interrupted due to technical reasons</li>
                <li>Compatibility may vary across different devices and browsers</li>
                <li>Network connection issues may affect service quality</li>
                <li>Third-party service availability may impact our services</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Important Reminder</h4>
              <p className="text-orange-800 text-sm">
                If you have serious mental health issues, please seek help from professional psychological counselors or doctors. Do not rely solely on our services.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Liability Limitation */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Shield className="h-6 w-6 mr-3 text-red-600" />
              Liability Limitation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Limitation of Liability:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>We are not liable for any direct or indirect losses caused by using our services</li>
                <li>We are not responsible for decisions or actions based on analysis results</li>
                <li>We are not liable for service interruptions due to technical failures or force majeure</li>
                <li>We are not responsible for losses caused by third-party service issues</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Maximum Liability:</h3>
              <p className="text-gray-600">
                Under any circumstances, our total liability to you shall not exceed the fees you paid for our services in the past 12 months. Since our current services are free, our maximum liability is zero.
              </p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">User Responsibility</h4>
              <p className="text-red-800 text-sm">
                You are fully responsible for your use of our services and any consequences arising therefrom. Please use our services rationally and do not make important life decisions based solely on analysis results.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Service Changes and Termination */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <XCircle className="h-6 w-6 mr-3 text-gray-600" />
              Service Changes and Termination
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Our Rights:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Modify, suspend, or terminate services at any time</li>
                <li>Update service features and user interface</li>
                <li>Adjust terms of service and privacy policy</li>
                <li>Restrict or terminate access rights of violating users</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Notification Obligations:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Major service changes will be notified to users in advance</li>
                <li>Terms modifications will be published on the website</li>
                <li>Service termination will be given reasonable notice period</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Your Rights:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Stop using our services at any time</li>
                <li>Request deletion of your personal data</li>
                <li>Provide opinions and suggestions on service changes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Dispute Resolution */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Gavel className="h-6 w-6 mr-3 text-indigo-600" />
              Dispute Resolution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Resolution Methods:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Friendly Negotiation:</strong> First attempt negotiation through email or other means</li>
                <li><strong>Mediation:</strong> If negotiation fails, seek third-party mediation</li>
                <li><strong>Arbitration:</strong> Conduct arbitration according to relevant arbitration rules</li>
                <li><strong>Litigation:</strong> Finally resolve through court litigation</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Applicable Law:</h3>
              <p className="text-gray-600">
                These terms of service are governed by the laws of the People's Republic of China. Any disputes will be resolved in the people's court of our registered location.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Contact Information</h4>
              <p className="text-indigo-800 text-sm">
                If you have disputes or questions, please first contact us via email at smilezjjzjj@126.com. We will do our best to resolve them properly.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Other Terms */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <FileText className="h-6 w-6 mr-3 text-gray-600" />
              Other Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Terms Effectiveness:</h3>
              <p className="text-gray-600">
                These terms of service take effect when you start using our services and remain in effect until you stop using them or we terminate the services.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Terms Modification:</h3>
              <p className="text-gray-600">
                We reserve the right to modify these terms of service at any time. Modified terms will be published on the website, and continued use of the service indicates acceptance of the modifications.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Terms Severability:</h3>
              <p className="text-gray-600">
                If any part of these terms is deemed invalid or unenforceable, the remaining parts shall remain valid.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Complete Agreement:</h3>
              <p className="text-gray-600">
                These terms of service and privacy policy constitute the complete agreement between you and us, superseding all previous agreements and understandings.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="modern-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Shield className="h-6 w-6 mr-3 text-blue-600" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              If you have any questions about these terms of service or need clarification, please contact us at any time:
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>Email:</strong> smilezjjzjj@126.com</p>
                <p><strong>Website:</strong> mbti-app.online</p>
                <p><strong>Service Hours:</strong> Weekdays 9:00-18:00</p>
                <p><strong>Response Time:</strong> We will reply to your inquiries within 1-3 business days</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Thank you for choosing our services! By using our MBTI personality interpretation platform, you confirm that you have read, understood, and agree to comply with these terms of service.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 