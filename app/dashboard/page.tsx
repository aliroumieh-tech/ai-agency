"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DashboardCard } from "@/components/dashboard-card";
import {
	CheckCircle2,
	LogIn,
	LogOut,
	Trash2,
	Loader2,
	AlertCircle,
} from "lucide-react";
import { Suspense } from "react";
import { AuthStatusHandler } from "../../components/auth-status-handler";

export default function ClientDashboardPage() {
	const [authStatus, setAuthStatus] = useState<string | null>(null);
	const [authError, setAuthError] = useState<string | null>(null);

	// State for Disconnect action
	const [disconnectLoading, setDisconnectLoading] = useState(false);
	const [disconnectSuccess, setDisconnectSuccess] = useState(false);
	const [disconnectError, setDisconnectError] = useState<string | null>(null);

	// State for Data Deletion action
	const [deleteLoading, setDeleteLoading] = useState(false);
	const [deleteSuccess, setDeleteSuccess] = useState(false);
	const [deleteConfirmationCode, setDeleteConfirmationCode] = useState<
		string | null
	>(null);
	const [deleteError, setDeleteError] = useState<string | null>(null);

	// Handler for Disconnect Account
	async function handleDisconnect() {
		setDisconnectLoading(true);
		setDisconnectSuccess(false);
		setDisconnectError(null);
		try {
			const res = await fetch("/api/meta/disconnect", { method: "POST" });
			if (!res.ok) {
				const errorData = await res.json().catch(() => ({}));
				throw new Error(
					errorData.error || "Failed to disconnect. Please try again."
				);
			}
			setDisconnectSuccess(true);
			// Reset auth status since we've disconnected
			setAuthStatus(null);
		} catch (error) {
			setDisconnectError(
				error instanceof Error ? error.message : "An unexpected error occurred."
			);
		} finally {
			setDisconnectLoading(false);
		}
	}

	// Handler for Request Data Deletion
	async function handleDataDeletion() {
		setDeleteLoading(true);
		setDeleteSuccess(false);
		setDeleteConfirmationCode(null);
		setDeleteError(null);
		try {
			const res = await fetch("/api/meta/data-deletion", { method: "POST" });
			if (!res.ok) {
				const errorData = await res.json().catch(() => ({}));
				throw new Error(
					errorData.error ||
						"Failed to request data deletion. Please try again."
				);
			}
			const data = await res.json();
			setDeleteConfirmationCode(data.confirmationCode || "Confirmed");
			setDeleteSuccess(true);
			// Reset auth status since we've deleted everything
			setAuthStatus(null);
		} catch (error: unknown) {
			setDeleteError(
				error instanceof Error ? error.message : "An unexpected error occurred."
			);
		} finally {
			setDeleteLoading(false);
		}
	}

	// Get the connect button state based on auth status
	const getConnectButton = () => {
		if (authStatus === "connected") {
			return (
				<div className="flex items-center gap-2 text-green-600 font-medium">
					<CheckCircle2 className="w-5 h-5" /> Account successfully connected
				</div>
			);
		} else if (authStatus === "error") {
			return (
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2 text-red-600 font-medium">
						<AlertCircle className="w-5 h-5" /> Authentication failed
					</div>
					{authError && (
						<p className="text-sm text-red-600">Error: {authError}</p>
					)}
					<Button
						asChild
						className="w-full sm:w-auto mt-2"
					>
						<a href="https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=974077931475302&redirect_uri=https://agencyroumieh.vercel.app/api/meta/auth/callback&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights">
							Try Again
						</a>
					</Button>
				</div>
			);
		} else {
			return (
				<Button
					asChild
					className="w-full sm:w-auto"
				>
					<a href="https://www.facebook.com/v19.0/dialog/oauth?client_id=974077931475302&redirect_uri=https://agencyroumieh.vercel.app/api/meta/auth/callback&response_type=code&scope=instagram_basic,instagram_manage_messages,instagram_manage_comments,instagram_content_publish,instagram_manage_insights">
						Connect with Meta
					</a>
				</Button>
			);
		}
	};

	return (
		<main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-44">
			<h1 className="text-3xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100">
				Client Integration Dashboard
			</h1>

			<Suspense
				fallback={
					<div className="my-4 text-center text-zinc-500">
						Loading status...
					</div>
				}
			>
				<AuthStatusHandler
					setAuthStatus={setAuthStatus}
					setAuthError={setAuthError}
				/>
			</Suspense>

			<div className="grid gap-6 md:gap-8">
				{/* Section 1: Connect Account */}
				<DashboardCard
					icon={<LogIn className="w-6 h-6" />}
					title="Connect Account"
					description="Link your Instagram & Facebook accounts via Meta to enable features."
					action={getConnectButton()}
				/>

				{/* Section 2: Disconnect Account */}
				<DashboardCard
					icon={<LogOut className="w-6 h-6 text-rose-600" />}
					title="Disconnect Account"
					description="Unlink your Meta account from our service. Integrations will stop working."
					action={
						<div className="flex flex-col items-start gap-2">
							{disconnectSuccess ? (
								<div className="flex items-center gap-2 text-green-600 font-medium">
									<CheckCircle2 className="w-5 h-5" /> Account successfully
									disconnected.
								</div>
							) : (
								<Button
									variant="destructive"
									onClick={handleDisconnect}
									disabled={disconnectLoading || authStatus !== "connected"}
									className="w-full sm:w-auto"
								>
									{disconnectLoading && (
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									)}
									{disconnectLoading
										? "Disconnecting..."
										: "Disconnect Meta Account"}
								</Button>
							)}
							{disconnectError && (
								<p className="text-sm text-red-600 dark:text-red-500">
									Error: {disconnectError}
								</p>
							)}
							{authStatus !== "connected" && !disconnectSuccess && (
								<p className="text-sm text-zinc-600 dark:text-zinc-400">
									You need to connect an account first.
								</p>
							)}
						</div>
					}
				/>

				{/* Section 3: Request Data Deletion */}
				<DashboardCard
					icon={<Trash2 className="w-6 h-6 text-amber-600" />}
					title="Request Data Deletion"
					description="Request deletion of all your Meta-related data from our systems. This action is irreversible."
					action={
						<div className="flex flex-col items-start gap-2">
							{deleteSuccess ? (
								<div className="flex flex-col gap-1 text-green-600 font-medium">
									<div className="flex items-center gap-2">
										<CheckCircle2 className="w-5 h-5" /> Deletion requested.
									</div>
									{deleteConfirmationCode && (
										<p className="text-sm ml-7">
											Confirmation Code:{" "}
											<code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">
												{deleteConfirmationCode}
											</code>
										</p>
									)}
								</div>
							) : (
								<Button
									variant="outline"
									onClick={handleDataDeletion}
									disabled={deleteLoading || authStatus !== "connected"}
									className="w-full sm:w-auto"
								>
									{deleteLoading && (
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									)}
									{deleteLoading ? "Requesting..." : "Request Data Deletion"}
								</Button>
							)}
							{deleteError && (
								<p className="text-sm text-red-600 dark:text-red-500">
									Error: {deleteError}
								</p>
							)}
							{authStatus !== "connected" && !deleteSuccess && (
								<p className="text-sm text-zinc-600 dark:text-zinc-400">
									You need to connect an account first.
								</p>
							)}
						</div>
					}
				/>
			</div>
		</main>
	);
}
