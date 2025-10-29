import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Apple, Chrome } from "lucide-react";

interface MobileDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MobileDownloadModal = ({ open, onOpenChange }: MobileDownloadModalProps) => {
  const handleIOSClick = () => {
    window.open("https://apps.apple.com/us/app/binder-chat/id6749217579", "_blank");
  };

  const handleAndroidClick = () => {
    window.open("https://play.google.com/store/apps/details?id=com.akal.binder", "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Choose Your Platform</DialogTitle>
          <DialogDescription>
            Select your mobile platform to download Binder
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            size="lg"
            className="w-full justify-start gap-3 text-lg py-6"
            onClick={handleIOSClick}
          >
            <Apple className="w-6 h-6" />
            Download for iOS
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full justify-start gap-3 text-lg py-6 border-2"
            onClick={handleAndroidClick}
          >
            <Chrome className="w-6 h-6" />
            Download for Android
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
