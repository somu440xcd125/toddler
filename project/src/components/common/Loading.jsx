import { CircleDashed } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CircleDashed className="w-12 h-12 animate-spin text-indigo-600" />
    </div>
  );
};

export default Loading;