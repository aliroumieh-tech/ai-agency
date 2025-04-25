"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface AuthStatusHandlerProps {
	setAuthStatus: (status: string | null) => void;
	setAuthError: (error: string | null) => void;
}

export function AuthStatusHandler({
	setAuthStatus,
	setAuthError,
}: AuthStatusHandlerProps) {
	const searchParams = useSearchParams();

	useEffect(() => {
		const status = searchParams.get("status");
		const errorMsg = searchParams.get("message");

		if (status === "connected") {
			setAuthStatus("connected");
		} else if (status === "error") {
			setAuthStatus("error");
			setAuthError(errorMsg || "Unknown error occurred during authentication");
		}
	}, [searchParams, setAuthStatus, setAuthError]);

	// This component doesn't render anything visible
	return null;
}
