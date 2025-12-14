import { FaceWidgets } from "../components/widgets/FaceWidgets";

export default function HomePage() {
  return (
    <div>
      <div className="pb-2 text-4xl font-medium text-neutral-700">Facial Expression Streaming</div>
      <div className="text-lg text-neutral-700">
        Stream webcam frames to Hume and see emotions update in real time. Set
        <code className="mx-1 rounded bg-neutral-200 px-2 py-1 text-sm">NEXT_PUBLIC_HUME_API_KEY</code>
        in a <code className="mx-1 rounded bg-neutral-200 px-2 py-1 text-sm">.env.local</code> file so the
        app can start immediately without any login.
      </div>

      <div className="mt-10">
        <FaceWidgets />
      </div>
    </div>
  );
}
