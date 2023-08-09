interface SkillI {
  elem?: any;
  name: string;
}
const Skill = ({ elem, name }: SkillI) => {
  return (
    <div className="flex flex-col items-center justify-center mb-2">
      <span className="text-white-400 text-3xl md:text-5xl hover:text-white-100 transition-colors">
        {elem}
      </span>
      <p className="text-sm md:text-lg font-m text-white-200 mt-2">{name}</p>
    </div>
  );
};

export default Skill;
