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
            隐私保护
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            隐私政策
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们致力于保护您的隐私和个人信息安全。本隐私政策详细说明了我们如何收集、使用和保护您的信息。
          </p>
          <div className="mt-6 text-sm text-gray-500">
            最后更新时间：2024年12月
          </div>
        </div>

        {/* 信息收集 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Database className="h-6 w-6 mr-3 text-purple-600" />
              我们收集的信息
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. 您主动提供的信息</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>MBTI性格类型选择</li>
                <li>测试模式偏好（快速模式或标准模式）</li>
                <li>通过联系表单提供的信息</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">2. 自动收集的信息</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>设备信息（浏览器类型、操作系统）</li>
                <li>访问日志（IP地址、访问时间、页面浏览记录）</li>
                <li>使用统计数据（通过Google Analytics）</li>
                <li>性能和错误监控数据</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 信息使用 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Eye className="h-6 w-6 mr-3 text-blue-600" />
              信息使用方式
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">我们使用收集的信息用于：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>提供个性化的MBTI性格解读服务</li>
                <li>改进我们的AI分析算法和服务质量</li>
                <li>分析网站使用情况和用户行为模式</li>
                <li>维护网站安全和防止滥用</li>
                <li>回应用户咨询和技术支持请求</li>
                <li>发送重要的服务更新通知</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">重要声明</h4>
              <p className="text-blue-800 text-sm">
                我们不会将您的个人信息出售、租赁或交易给第三方用于营销目的。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 数据保护 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Lock className="h-6 w-6 mr-3 text-green-600" />
              数据保护措施
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">技术保护措施</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>使用HTTPS加密传输所有数据</li>
                <li>采用行业标准的数据加密技术</li>
                <li>定期进行安全审计和漏洞扫描</li>
                <li>实施访问控制和身份验证机制</li>
                <li>使用安全的云服务提供商（Vercel）</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">管理保护措施</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>限制员工对个人数据的访问权限</li>
                <li>定期培训员工数据保护意识</li>
                <li>建立数据泄露应急响应机制</li>
                <li>定期备份和安全存储数据</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Cookie和追踪技术 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <AlertTriangle className="h-6 w-6 mr-3 text-orange-600" />
              Cookie和追踪技术
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">我们使用以下技术：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>必要Cookie：</strong>确保网站正常功能运行</li>
                <li><strong>分析Cookie：</strong>Google Analytics用于了解网站使用情况</li>
                <li><strong>性能Cookie：</strong>监控网站性能和用户体验</li>
                <li><strong>本地存储：</strong>保存用户偏好设置</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Cookie管理</h4>
              <p className="text-orange-800 text-sm">
                您可以通过浏览器设置管理或禁用Cookie，但这可能影响网站的某些功能。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 第三方服务 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <UserCheck className="h-6 w-6 mr-3 text-indigo-600" />
              第三方服务
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">我们使用的第三方服务：</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">DeepSeek AI</h4>
                  <p className="text-gray-600 text-sm">
                    用于提供AI驱动的MBTI性格分析服务。您的性格类型数据会被发送到DeepSeek进行处理。
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Google Analytics</h4>
                  <p className="text-gray-600 text-sm">
                    用于分析网站流量和用户行为。收集的数据是匿名的，用于改进网站体验。
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Vercel</h4>
                  <p className="text-gray-600 text-sm">
                    我们的网站托管服务提供商，确保网站的稳定运行和数据安全。
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 用户权利 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Shield className="h-6 w-6 mr-3 text-purple-600" />
              您的权利
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">您有权：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>了解我们收集和使用您信息的方式</li>
                <li>要求访问我们持有的关于您的个人信息</li>
                <li>要求更正不准确的个人信息</li>
                <li>要求删除您的个人信息</li>
                <li>反对或限制某些数据处理活动</li>
                <li>撤回您之前给予的同意</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">如何行使权利</h4>
              <p className="text-purple-800 text-sm">
                如需行使上述权利，请通过邮箱 smilezjjzjj@126.com 联系我们，我们将在合理时间内响应您的请求。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 数据保留 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Database className="h-6 w-6 mr-3 text-gray-600" />
              数据保留
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">数据保留期限：</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>会话数据：</strong>浏览器会话结束后自动清除</li>
                <li><strong>分析数据：</strong>Google Analytics保留26个月</li>
                <li><strong>日志数据：</strong>保留30天用于安全监控</li>
                <li><strong>联系信息：</strong>根据业务需要保留，但不超过3年</li>
              </ul>
            </div>
            
            <p className="text-gray-600 text-sm">
              我们会定期审查和清理不再需要的数据，确保只保留必要的信息。
            </p>
          </CardContent>
        </Card>

        {/* 儿童隐私 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <UserCheck className="h-6 w-6 mr-3 text-pink-600" />
              儿童隐私保护
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              我们的服务面向成年用户。我们不会故意收集13岁以下儿童的个人信息。如果我们发现无意中收集了儿童的个人信息，我们将立即删除这些信息。
            </p>
            <p className="text-gray-600">
              如果您是家长或监护人，发现您的孩子向我们提供了个人信息，请联系我们，我们将采取措施删除相关信息。
            </p>
          </CardContent>
        </Card>

        {/* 政策更新 */}
        <Card className="modern-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <AlertTriangle className="h-6 w-6 mr-3 text-yellow-600" />
              政策更新
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              我们可能会不时更新本隐私政策。当我们进行重大更改时，我们会在网站上发布更新通知，并更新页面顶部的"最后更新时间"。
            </p>
            <p className="text-gray-600">
              我们建议您定期查看本隐私政策，以了解我们如何保护您的信息。继续使用我们的服务即表示您接受更新后的隐私政策。
            </p>
          </CardContent>
        </Card>

        {/* 联系我们 */}
        <Card className="modern-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Shield className="h-6 w-6 mr-3 text-blue-600" />
              联系我们
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              如果您对本隐私政策有任何疑问、意见或建议，或需要行使您的权利，请通过以下方式联系我们：
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>邮箱：</strong>smilezjjzjj@126.com</p>
                <p><strong>网站：</strong>mbti-app.online</p>
                <p><strong>响应时间：</strong>我们将在收到您的请求后7个工作日内回复</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 