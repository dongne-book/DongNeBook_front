import { Search, X, ArrowLeft, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onBack?: () => void;
}

const SearchBar = ({ onSearch, onBack }: SearchBarProps) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleBack = () => {
    router.push("/explore");
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="flex items-center max-w-md mx-auto">
      <Button
        variant="ghost"
        size="icon"
        className="size-8"
        onClick={handleBack}
      >
        <ChevronLeft className="text-gray-600" />
      </Button>

      <Input
        type="text"
        placeholder="검색어를 입력하세요."
        autoFocus
        className="text-sm focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <Button variant="ghost" size="icon" onClick={handleClear}>
          <X className="w-5 h-5 text-gray-400" />
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
