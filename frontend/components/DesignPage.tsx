'use client';
import { useState } from 'react';
import DesignHeader from './DesignHeader';
import BuilderSidebar from './BuilderSidebar';
import QuestionConfig from './QuestionConfig';
import OptionSetsEditor from './OptionSetsEditor';
import QuestionTabs from './QuestionTabs';
import PreviewPanel from './PreviewPanel';

export default function DesignPage() {
  const [previewView, setPreviewView] = useState<'preview' | 'logic'>('preview');

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] bg-gray-50">
      <DesignHeader surveyTitle="Untitled Survey" />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block flex-shrink-0">
          <BuilderSidebar />
        </div>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <QuestionConfig />
          <QuestionTabs />
          <OptionSetsEditor />
        </div>
        <div className="w-80 flex-shrink-0 border-l bg-white p-4 overflow-y-auto hidden sm:block">
          <PreviewPanel view={previewView} onTabChange={setPreviewView} />
        </div>
      </div>
    </div>
  );
}
