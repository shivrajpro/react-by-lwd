export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="p-2">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Purpose of this application
        </h1>
        <p className="text-xl my-2 font-bold">
          To explore the below concepts in ReactJS v17{" "}
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">React functional and class components</li>
          <li className="mb-2">Virtual DOM</li>
          <li className="mb-2">Props and prop-types</li>
          <li className="mb-2">React Hooks</li>
          <li className="mb-2">Component LifeCycle</li>
          <li className="mb-2">React Router</li>
          <li className="mb-2">Redux</li>
          <li className="mb-2">Deployment with firebase</li>
        </ul>
      </div>
    </div>
  );
}
