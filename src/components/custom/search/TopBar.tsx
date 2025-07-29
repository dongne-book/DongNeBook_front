import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TopBarProps {
  className?: string;
  onSearchClick?: () => void;
  showSearchIcon?: boolean;
}

const TopBar = ({
  className,
  onSearchClick,
  showSearchIcon = true,
}: TopBarProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-1 bg-white border-b border-gray-200",
        className
      )}
    >
      {/* Logo/Title */}
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-900"></h1>
      </div>

      {/* Search Icon */}
      {showSearchIcon && (
        <Button
          onClick={onSearchClick}
          variant={"ghost"}
          className="size-8"
          size="icon"
          aria-label="Search"
        >
          <Search className="w-5 h-5 text-gray-600" />
        </Button>
      )}
    </div>
  );
};

export default TopBar;
