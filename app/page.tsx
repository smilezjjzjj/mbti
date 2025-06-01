import dynamic from 'next/dynamic';
import MbtiInterpretation from '@/components/MbtiInterpretation';
import NetworkStatusProvider from './network-status-provider';
import { ExternalLink } from 'lucide-react';

// 动态导入评论区组件
const CommentSection = dynamic(() => import('@/components/CommentSection'), {
  loading: () => (
    <div className="animate-pulse space-y-4">
      <div className="h-24 bg-gray-200 rounded-lg"></div>
      <div className="h-32 bg-gray-200 rounded-lg"></div>
    </div>
  ),
  ssr: false
});

export default function Home() {
  return (
    <>
      <NetworkStatusProvider />
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-6 px-4">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-[#333333]">MBTI 性格解读</h1>
          <p className="text-[#666666] max-w-2xl mx-auto">
            MBTI（迈尔斯-布里格斯类型指标）是一种性格类型学，帮助人们理解自己与他人的不同之处。
            输入你的MBTI类型，获取AI生成的个性化解读。
          </p>
        </section>
        
        <MbtiInterpretation />
        
        <section className="mt-12 max-w-2xl mx-auto text-sm text-[#666666] bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold text-lg mb-2 text-[#333333]">什么是MBTI？</h2>
          <p className="mb-4">
            MBTI（Myers-Briggs Type Indicator）是基于荣格心理学发展起来的人格类型学说，
            将人格分为16种类型。它通过四个维度来描述人格特质：
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><span className="font-medium">能量来源</span>：外向(E)与内向(I)</li>
            <li><span className="font-medium">信息获取</span>：感觉(S)与直觉(N)</li>
            <li><span className="font-medium">决策方式</span>：思考(T)与情感(F)</li>
            <li><span className="font-medium">生活态度</span>：判断(J)与感知(P)</li>
          </ul>
          <p className="mt-4">
            了解你的MBTI类型可以帮助你更好地认识自己，理解自己的优势和盲点，改善人际关系，并在职业选择上做出更明智的决定。
          </p>
          <div className="mt-6 text-center">
            <a 
              href="https://www.16personalities.com/zh/免费人格测试" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0071E3] hover:text-[#0068D1] inline-flex items-center gap-1"
            >
              <span>还不知道自己的MBTI类型？点击这里免费测试</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </section>
        
        <div className="mt-16 w-full max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center text-[#333333]">交流讨论区</h2>
          <p className="text-center text-[#666666] mb-8">
            分享你的MBTI体验，与其他用户交流讨论，互相学习成长。
          </p>
          <CommentSection mbtiType={null} />
        </div>
      </div>
    </>
  );
}