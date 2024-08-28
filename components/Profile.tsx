import meData from "@/constants/data";

export function Profile() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p className="text-lg">{meData.profile.summary}</p>
    </section>
  );
}
