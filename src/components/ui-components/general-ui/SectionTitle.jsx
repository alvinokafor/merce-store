
export default function SectionTitle({ titleText, titleColor }) {
  return (
    <div className="flex items-center space-x-4">
      <div className={`${titleColor} w-4 h-8 rounded-[4px]`}></div>
      <p className="md:text-xl font-semibold">{titleText}</p>
    </div>
  );
}
