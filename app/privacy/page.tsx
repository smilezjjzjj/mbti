import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-1">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Protection
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to protecting your privacy and personal information security. This privacy policy details how we collect, use, and protect your information.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: December 2024
          </div>
        </div>

        {/* Information Collection */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Database className="h-6 w-6 mr-3 text-purple-600" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>MBTI personality type selections</li>
                <li>Test mode preferences (Quick mode or Standard mode)</li>
                <li>Information provided through contact forms</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">2. Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Device information (browser type, operating system)</li>
                <li>Access logs (IP address, access time, page views)</li>
                <li>Usage statistics (via Google Analytics)</li>
                <li>Performance and error monitoring data</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Information Usage */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Eye className="h-6 w-6 mr-3 text-blue-600" />
              How We Use Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">We use collected information to:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide personalized MBTI personality interpretation services</li>
                <li>Improve our AI analysis algorithms and service quality</li>
                <li>Analyze website usage and user behavior patterns</li>
                <li>Maintain website security and prevent abuse</li>
                <li>Respond to user inquiries and technical support requests</li>
                <li>Send important service update notifications</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Important Statement</h4>
              <p className="text-blue-800 text-sm">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Lock className="h-6 w-6 mr-3 text-green-600" />
              Data Protection Measures
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Technical Protection Measures</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Use HTTPS encryption for all data transmission</li>
                <li>Employ industry-standard data encryption technologies</li>
                <li>Conduct regular security audits and vulnerability scans</li>
                <li>Implement access control and authentication mechanisms</li>
                <li>Use secure cloud service providers (Vercel)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Administrative Protection Measures</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Limit employee access to personal data</li>
                <li>Regularly train employees on data protection awareness</li>
                <li>Establish data breach emergency response mechanisms</li>
                <li>Regularly backup and securely store data</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Cookies and Tracking */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <AlertTriangle className="h-6 w-6 mr-3 text-orange-600" />
              Cookies and Tracking Technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">We use the following technologies:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Essential Cookies:</strong> Ensure normal website functionality</li>
                <li><strong>Analytics Cookies:</strong> Google Analytics to understand website usage</li>
                <li><strong>Performance Cookies:</strong> Monitor website performance and user experience</li>
                <li><strong>Local Storage:</strong> Save user preference settings</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Cookie Management</h4>
              <p className="text-orange-800 text-sm">
                You can manage or disable cookies through your browser settings, but this may affect certain website functions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Third-party Services */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <UserCheck className="h-6 w-6 mr-3 text-indigo-600" />
              Third-party Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Third-party services we use:</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">DeepSeek AI</h4>
                  <p className="text-gray-600 text-sm">
                    Used to provide AI-powered MBTI personality analysis services. Your personality type data is sent to DeepSeek for processing.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Google Analytics</h4>
                  <p className="text-gray-600 text-sm">
                    Used to analyze website traffic and user behavior. Collected data is anonymous and used to improve website experience.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Vercel</h4>
                  <p className="text-gray-600 text-sm">
                    Our website hosting service provider, ensuring stable website operation and data security.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Shield className="h-6 w-6 mr-3 text-purple-600" />
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">You have the right to:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Know how we collect and use your information</li>
                <li>Request access to personal information we hold about you</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain data processing activities</li>
                <li>Withdraw consent you previously gave</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">How to Exercise Your Rights</h4>
              <p className="text-purple-800 text-sm">
                To exercise the above rights, please contact us at smilezjjzjj@126.com, and we will respond to your request within a reasonable time.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Database className="h-6 w-6 mr-3 text-gray-600" />
              Data Retention
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Data retention periods:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Session data:</strong> Automatically cleared after browser session ends</li>
                <li><strong>Analytics data:</strong> Google Analytics retains for 26 months</li>
                <li><strong>Log data:</strong> Retained for 30 days for security monitoring</li>
                <li><strong>Contact information:</strong> Retained based on business needs, but not exceeding 3 years</li>
              </ul>
            </div>
            
            <p className="text-gray-600 text-sm">
              We regularly review and clean up data that is no longer needed, ensuring we only retain necessary information.
            </p>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <UserCheck className="h-6 w-6 mr-3 text-pink-600" />
              Children's Privacy Protection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Our services are intended for adult users. We do not knowingly collect personal information from children under 13. If we discover that we have inadvertently collected personal information from a child, we will immediately delete such information.
            </p>
            <p className="text-gray-600">
              If you are a parent or guardian and discover that your child has provided us with personal information, please contact us and we will take steps to delete the relevant information.
            </p>
          </CardContent>
        </Card>

        {/* Policy Updates */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <AlertTriangle className="h-6 w-6 mr-3 text-yellow-600" />
              Policy Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              We may update this privacy policy from time to time. When we make significant changes, we will post update notifications on the website and update the "Last updated" date at the top of the page.
            </p>
            <p className="text-gray-600">
              We recommend that you regularly review this privacy policy to understand how we protect your information. Continued use of our services indicates your acceptance of the updated privacy policy.
            </p>
          </CardContent>
        </Card>

        {/* Contact Us */}
        <Card className="modern-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Shield className="h-6 w-6 mr-3 text-blue-600" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              If you have any questions, comments, or suggestions about this privacy policy, or need to exercise your rights, please contact us through the following methods:
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>Email:</strong> smilezjjzjj@126.com</p>
                <p><strong>Website:</strong> mbti-app.online</p>
                <p><strong>Response time:</strong> We will respond within 7 business days of receiving your request</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 