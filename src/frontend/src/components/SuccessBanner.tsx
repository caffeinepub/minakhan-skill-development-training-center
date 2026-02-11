import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessBanner() {
  return (
    <Alert className="mb-6 border-green-500 bg-green-50 dark:bg-green-950/20">
      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
      <AlertTitle className="text-green-800 dark:text-green-300">Message Sent Successfully!</AlertTitle>
      <AlertDescription className="text-green-700 dark:text-green-400">
        Thank you for contacting us. We'll get back to you soon.
      </AlertDescription>
    </Alert>
  );
}
