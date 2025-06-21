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
            服务条款
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            服务条款
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            欢迎使用MBTI性格解读平台。请仔细阅读以下服务条款，使用我们的服务即表示您同意遵守这些条款。
          </p>
          <div className="mt-6 text-sm text-gray-500">
            最后更新时间：2024年12月
          </div>
        </div>

        {/* 服务概述 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
              服务概述
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">我们提供的服务包括：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>基于AI技术的MBTI性格类型解读服务</li>
                <li>个性化的职业发展建议和分析</li>
                <li>人际关系和沟通风格指导</li>
                <li>个人成长和潜能开发建议</li>
                <li>相关的心理学知识和资讯</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">服务性质</h4>
              <p className="text-green-800 text-sm">
                我们的服务仅供参考和娱乐目的，不能替代专业的心理咨询或医疗建议。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 用户责任 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Users className="h-6 w-6 mr-3 text-blue-600" />
              用户责任与义务
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">使用我们的服务时，您同意：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>提供准确、真实的信息</li>
                <li>不滥用或过度使用我们的服务</li>
                <li>不尝试破坏或干扰网站的正常运行</li>
                <li>不使用自动化工具或脚本访问我们的服务</li>
                <li>遵守相关法律法规和社会道德规范</li>
                <li>尊重他人的隐私和权利</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">禁止的行为：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>发布虚假、误导性或恶意内容</li>
                <li>侵犯他人的知识产权</li>
                <li>进行任何形式的网络攻击</li>
                <li>传播病毒或恶意软件</li>
                <li>收集其他用户的个人信息</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 知识产权 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Shield className="h-6 w-6 mr-3 text-purple-600" />
              知识产权
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">我们的权利：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>网站设计、布局和用户界面的版权</li>
                <li>AI分析算法和技术的知识产权</li>
                <li>网站内容、文本和图像的版权</li>
                <li>商标、品牌名称和标识的权利</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">您的权利：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>您提供的个人信息仍归您所有</li>
                <li>您可以合理使用我们提供的分析结果</li>
                <li>您有权删除您的个人数据</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">使用许可</h4>
              <p className="text-purple-800 text-sm">
                我们授予您有限的、非独占的、不可转让的许可来使用我们的服务，仅限于个人非商业用途。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 免责声明 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <AlertTriangle className="h-6 w-6 mr-3 text-orange-600" />
              免责声明
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">服务限制：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>我们的分析结果仅供参考，不保证100%准确</li>
                <li>AI技术可能存在局限性和偏差</li>
                <li>不同的测试结果可能会有差异</li>
                <li>我们不对基于分析结果做出的决定负责</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">技术限制：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>服务可能因技术原因暂时中断</li>
                <li>不同设备和浏览器的兼容性可能有差异</li>
                <li>网络连接问题可能影响服务质量</li>
                <li>第三方服务的可用性可能影响我们的服务</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">重要提醒</h4>
              <p className="text-orange-800 text-sm">
                如果您有严重的心理健康问题，请寻求专业心理咨询师或医生的帮助，不要仅依赖我们的服务。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 责任限制 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Scale className="h-6 w-6 mr-3 text-red-600" />
              责任限制
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">我们不承担以下责任：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>因使用我们的服务而导致的任何直接或间接损失</li>
                <li>因分析结果不准确而造成的决策失误</li>
                <li>因技术故障或服务中断造成的损失</li>
                <li>第三方服务或链接网站的内容和行为</li>
                <li>用户数据丢失或泄露（非我们过错）</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">赔偿限制：</h3>
              <p className="text-gray-600">
                在任何情况下，我们对您的总赔偿责任不会超过您在过去12个月内为使用我们服务支付的费用（如适用）。
              </p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">法律声明</h4>
              <p className="text-red-800 text-sm">
                某些司法管辖区不允许排除或限制某些损害赔偿，因此上述限制可能不适用于您。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 服务变更和终止 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <XCircle className="h-6 w-6 mr-3 text-gray-600" />
              服务变更和终止
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">我们的权利：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>随时修改、暂停或终止服务</li>
                <li>更新服务功能和用户界面</li>
                <li>调整服务条款和隐私政策</li>
                <li>限制或终止违规用户的访问权限</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">通知义务：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>重大服务变更会提前通知用户</li>
                <li>条款修改会在网站上公布</li>
                <li>服务终止会给予合理的通知期</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">您的权利：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>随时停止使用我们的服务</li>
                <li>要求删除您的个人数据</li>
                <li>对服务变更提出意见和建议</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 争议解决 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Gavel className="h-6 w-6 mr-3 text-indigo-600" />
              争议解决
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">解决途径：</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>友好协商：</strong>首先通过邮件或其他方式进行协商</li>
                <li><strong>调解：</strong>如协商不成，可寻求第三方调解</li>
                <li><strong>仲裁：</strong>根据相关仲裁规则进行仲裁</li>
                <li><strong>诉讼：</strong>最后可通过法院诉讼解决</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">适用法律：</h3>
              <p className="text-gray-600">
                本服务条款受中华人民共和国法律管辖。任何争议将在我们注册地的人民法院解决。
              </p>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">联系方式</h4>
              <p className="text-indigo-800 text-sm">
                如有争议或疑问，请首先通过邮箱 smilezjjzjj@126.com 联系我们，我们会尽力妥善解决。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 其他条款 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <FileText className="h-6 w-6 mr-3 text-gray-600" />
              其他条款
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">条款生效：</h3>
              <p className="text-gray-600">
                本服务条款自您开始使用我们的服务时生效，直至您停止使用或我们终止服务。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">条款修改：</h3>
              <p className="text-gray-600">
                我们保留随时修改本服务条款的权利。修改后的条款将在网站上公布，继续使用服务即表示接受修改。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">条款分离：</h3>
              <p className="text-gray-600">
                如果本条款的任何部分被认定为无效或不可执行，其余部分仍然有效。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">完整协议：</h3>
              <p className="text-gray-600">
                本服务条款与隐私政策构成您与我们之间的完整协议，取代之前的所有协议和理解。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 联系信息 */}
        <Card className="modern-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Shield className="h-6 w-6 mr-3 text-blue-600" />
              联系我们
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              如果您对本服务条款有任何疑问或需要澄清，请随时联系我们：
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>邮箱：</strong>smilezjjzjj@126.com</p>
                <p><strong>网站：</strong>mbti-app.online</p>
                <p><strong>服务时间：</strong>工作日 9:00-18:00</p>
                <p><strong>响应时间：</strong>我们将在1-3个工作日内回复您的询问</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                感谢您选择我们的服务！通过使用我们的MBTI性格解读平台，您确认已阅读、理解并同意遵守本服务条款。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 