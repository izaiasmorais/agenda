import { Event } from "@/components/event";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="w-full min-h-screen py-12 px-4 bg-muted">
			<div className="max-w-[1200px] mx-auto bg-white rounded-lg flex flex-col gap-4 p-8">
				<div className="flex items-center justify-between">
					<h1 className="font-semibold text-2xl">Eventos</h1>

					<Button className="py-6 px-4 flex items-center gap-2">
						Criar Evento
					</Button>
				</div>

				<Event />
				<Event />
				<Event />
				<Event />
			</div>
		</main>
	);
}
