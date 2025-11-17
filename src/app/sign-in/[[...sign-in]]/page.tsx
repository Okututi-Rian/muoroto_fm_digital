import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <SignIn 
        fallbackRedirectUrl="/admin"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "glassmorphic rounded-2xl shadow-glassmorphic-lg",
            headerTitle: "font-headline text-2xl text-foreground",
            headerSubtitle: "font-body text-muted-foreground",
            formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground font-cta",
            formFieldInput: "bg-input border-border text-foreground",
            footerActionText: "font-body text-muted-foreground",
            footerActionLink: "text-primary hover:text-primary/80 font-body-medium",
            dividerLine: "bg-border",
            dividerText: "text-muted-foreground font-body",
            socialButtonsBlockButton: "bg-muted hover:bg-muted/80 text-foreground font-body",
          },
        }}
      />
    </div>
  );
}