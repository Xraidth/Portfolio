import React from 'react'

import CustomGadgetSpotify from './CustomGadgetSpotify.js'

const CustomAboutMe = () => {
  return (
<div className='d-flex'>
    <div className='App-about-me'>  
    
      <p className='text-light m-3'>
      About me:

Hello! my name is Ignacio Rodriguez. I'm passionate about programing. As a [Your Profession or Area of Specialization],
I've dedicated my time to [Brief Description of your Experience or Background].
I love [An Activity or Hobby Reflecting Your Personality], and I'm always looking for new ways to [Personal Goals or Objectives]. My focus revolves around [Personal Principles or Values], and I firmly believe in [A Personal Belief or Philosophy].

With a background in [Your Education or Work Experience], I've developed skills in [List of Relevant Skills]. My goal is to [Your Professional or Personal Objective], and I'm excited to [What Motivates You or What You're Seeking].

What drives me:

[Explanation of what motivates you, could be a desire for learning, contributing to the well-being of others, etc.]

Key accomplishments:

[Accomplishment 1, for example, a successful project, a significant milestone]
[Accomplishment 2, another notable achievement in your career or life]
Key values:

[Value 1]
[Value 2]
[Value 3]
What you'll find in my content:

[Brief description of what you offer on your platform, blog, social media, etc.]

I hope you enjoy exploring my world and sharing this exciting journey with me!
      </p>
    
    
    
    </div>

    <div className='App-about-me'>
      <CustomGadgetSpotify type={'playlist'} code={'2Tt55BMgrEmNuIw3RjkvXF'}/>
    </div>

  </div>
    

  )
}

export default CustomAboutMe
