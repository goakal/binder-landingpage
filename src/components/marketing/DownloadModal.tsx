import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import type { CommonCopy } from '@/i18n/common.copy';
import { APP_STORE_URL, PLAY_STORE_URL } from './links';
import { AppleIcon, AndroidIcon } from './PlatformIcons';

export const DownloadModal = ({
  open,
  onOpenChange,
  copy,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  copy: CommonCopy['modal'];
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="hb-modal" style={{ maxWidth: 420, background: '#FBFAF7', border: '1px solid #E6E2D9', borderRadius: 22, padding: '32px 30px 30px' }}>
      <DialogHeader>
        <DialogTitle style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 26, lineHeight: 1.2, color: '#1C1B1A', textAlign: 'center' }}>
          {copy.title}
        </DialogTitle>
        <DialogDescription style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14.5, lineHeight: 1.6, color: '#8A867C', textAlign: 'center', marginTop: 6 }}>
          {copy.description}
        </DialogDescription>
      </DialogHeader>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 22 }}>
        <a href={APP_STORE_URL} className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #E9E7E2 100%)' }} target="_blank" rel="noopener noreferrer">
          <AppleIcon size={17} />
          App Store
        </a>
        <a href={PLAY_STORE_URL} className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)' }} target="_blank" rel="noopener noreferrer">
          <AndroidIcon size={18} />
          Google Play
        </a>
      </div>
    </DialogContent>
  </Dialog>
);
