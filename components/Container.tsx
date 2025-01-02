// components/Container.tsx
import { cn } from '@/lib/utils'; // Ensure this utility is defined correctly

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-5", className)}>
      {children}
    </div>
  );
}

export default Container;
