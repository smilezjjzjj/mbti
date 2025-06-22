import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Target, 
  Users, 
  Lightbulb, 
  Award, 
  Brain,
  Rocket,
  Shield,
  Star,
  Mail,
  Github,
  Globe
} from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-1">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Heart className="h-4 w-4 mr-2" />
            About Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Explore Your Inner Self, Become a Better You
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing in-depth personality interpretation and personal growth guidance for everyone through advanced AI technology and professional psychological knowledge, helping you better understand yourself and discover your inner potential.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-gray-600 text-center leading-relaxed">
                  To help everyone better understand themselves, discover their unique strengths and potential, and provide scientific and personalized growth guidance through professional MBTI personality analysis and AI technology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <p className="text-gray-600 text-center leading-relaxed">
                  To become the most trusted and professional personality analysis platform, helping millions of people achieve self-awareness, personal growth, and life success through scientific methods and caring service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide every decision and action we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="modern-card text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Scientific Rigor</h3>
                <p className="text-gray-600 text-sm">
                  Based on psychological theories and scientific research to ensure professional and accurate analysis results
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
                <p className="text-gray-600 text-sm">
                  Always centered on user needs, providing the highest quality service experience
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Privacy Protection</h3>
                <p className="text-gray-600 text-sm">
                  Strictly protect user privacy and data security, ensuring information safety
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Continuously explore new technologies and methods to provide better services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Advantages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional team and advanced technology provide you with the best service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional AI Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Using advanced artificial intelligence technology combined with psychological expertise to provide accurate and in-depth personality analysis
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Scientific Foundation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Based on mature MBTI theory system and the latest psychological research to ensure analysis accuracy and reliability
                </p>
              </CardContent>
            </Card>
            
            <Card className="modern-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Providing customized analysis reports and growth suggestions based on each user's unique characteristics
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Development Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Development Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to reality, every step is for better service
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            
            <div className="space-y-12">
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="modern-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end mb-2">
                        <Badge variant="secondary">Project Initiation</Badge>
                        <Lightbulb className="h-5 w-5 text-purple-500 ml-2" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Concept Birth</h3>
                      <p className="text-gray-600 text-sm">
                        Identified the need for professional MBTI analysis services and began developing AI-powered solutions
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-10 shadow-lg"></div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8"></div>
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full z-10 shadow-lg"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <Card className="modern-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Brain className="h-5 w-5 text-blue-500 mr-2" />
                        <Badge variant="secondary">Technology Development</Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">AI Model Training</h3>
                      <p className="text-gray-600 text-sm">
                        Developed and trained AI models, integrated psychological theories to ensure analysis accuracy
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="modern-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end mb-2">
                        <Badge variant="secondary">Platform Launch</Badge>
                        <Rocket className="h-5 w-5 text-green-500 ml-2" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Official Launch</h3>
                      <p className="text-gray-600 text-sm">
                        Platform officially launched, providing professional MBTI analysis services to users
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full z-10 shadow-lg"></div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8"></div>
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full z-10 shadow-lg"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <Card className="modern-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Target className="h-5 w-5 text-orange-500 mr-2" />
                        <Badge variant="secondary">Future Plans</Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Continuous Optimization</h3>
                      <p className="text-gray-600 text-sm">
                        Continuously optimize AI algorithms, add more personalized features to provide better service
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="mb-16">
          <Card className="modern-card bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Let's Explore the Inner World Together
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                If you have any questions, suggestions, or collaboration intentions, we'd love to communicate with you
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a href="mailto:smilezjjzjj@126.com">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="mr-2 h-5 w-5 text-purple-600" />
                    Contact Us
                  </Button>
                </a>
                
                <a 
                  href="https://github.com/smilezjjzjj/mbti-app.online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-white/90 backdrop-blur-md border-2 border-white text-purple-600 hover:bg-white hover:text-purple-700 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
                  >
                    <Github className="mr-2 h-5 w-5 text-purple-600" />
                    View Source Code
                  </Button>
                </a>
              </div>
              
              <div className="flex justify-center space-x-8 text-sm opacity-90">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  smilezjjzjj@126.com
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  mbti-app.online
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Acknowledgments */}
        <div className="text-center mb-12">
          <Card className="modern-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Special Thanks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Thank you to all users and friends who support us, to the open source community for providing excellent technologies and tools,
                and to psychological researchers for their contributions to MBTI theory. It is because of everyone's support
                that we can provide professional, accurate, and valuable personality interpretation services to users.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-gray-600">Serving with heart, becoming a better self</span>
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 