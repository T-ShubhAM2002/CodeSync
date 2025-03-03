"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!); // creates a Convex client instance with the provided URL

function ConvexClerkProvider({ children }: { children: React.ReactNode }) {// wrapper component that provides both Convex and Clerk providers
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}> {/* provides Clerk authentication */}
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>  {/* provides Convex client and Clerk authentication uses useAuth to check user identity */}
                {children} {/* Ensures all nested components get access to Clerk and Convex */}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}

export default ConvexClerkProvider;
