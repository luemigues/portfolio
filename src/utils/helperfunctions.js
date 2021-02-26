export function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

export function styleSkills (arr, Component){
   return arr.map(skill => {
    return <Component key={skill.name} Icon={skill.Icon} name={skill.name}/>
   })
};