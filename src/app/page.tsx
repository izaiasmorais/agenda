import { CreateEventModal } from "@/components/create-event-modal";
import { Event } from "@/components/event";

export default function Home() {
	return (
		<main className="w-full min-h-screen py-12 px-4 bg-muted">
			<div className="max-w-[1200px] mx-auto bg-white rounded-lg flex flex-col gap-4 p-8">
				<div className="flex items-center justify-between">
					<h1 className="font-semibold text-2xl">Eventos</h1>

					<CreateEventModal />
				</div>

				<Event />
				<Event />
				<Event />
				<Event />
			</div>
		</main>
	);
}
