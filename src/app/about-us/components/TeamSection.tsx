import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
  expertise: string[];
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

interface TeamSectionProps {
  className?: string;
}

const TeamSection = ({ className = '' }: TeamSectionProps) => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Wambui wa Kamande',
      role: 'Senior Host & Program Director',
      bio: 'Veteran broadcaster with over 15 years of experience in Kenyan radio. Known for hosting Riruka and Githima Kia Mwihoko programs with deep cultural insights.',
      image: "https://images.unsplash.com/photo-1640242140781-9a97c235d543",
      alt: 'Professional African woman in navy suit with warm smile in modern office setting',
      expertise: ['Cultural Programs', 'Spiritual Content', 'Morning Shows', 'Community Leadership'],
      socialLinks: {
        email: 'wambui@muorotofm.co.ke'
      }
    },
    {
      name: 'Henry Kissinger',
      role: 'Lead Host & News Anchor',
      bio: 'Award-winning journalist specializing in current affairs and human interest stories. Hosts Ndama Neru (#TheDoublePivot) and Hingura Ngoro programs.',
      image: "https://images.unsplash.com/photo-1684262855358-a4377c6b29a2",
      alt: 'Confident African man with natural hair in professional blazer smiling at camera',
      expertise: ['News Broadcasting', 'Current Affairs', 'Human Interest', 'Political Analysis'],
      socialLinks: {
        email: 'henry@muorotofm.co.ke'
      }
    },
    {
      name: 'Mukuhi wa Maina',
      role: 'Co-Host & Cultural Expert',
      bio: 'Cultural preservation advocate and co-host of Ndama Neru (#TheDoublePivot). Expert in Kikuyu traditions and also hosts Muoroto Country on Sundays.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_102fc7764-1762273558816.png",
      alt: 'Young African man with glasses in casual shirt working with technical equipment',
      expertise: ['Cultural Heritage', 'Traditional Music', 'Storytelling', 'Rural Development'],
      socialLinks: {
        email: 'mukuhi@muorotofm.co.ke'
      }
    },
    {
      name: 'Julie Wa Christopher',
      role: 'Midday Host & Spiritual Leader',
      bio: 'Dynamic presenter hosting Kenga Kenga and Njaini Cia Jehova programs. Known for her engaging style and spiritual guidance to the community.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ada97295-1762275065012.png",
      alt: 'Professional African woman with glasses in green blouse',
      expertise: ['Spiritual Programs', 'Community Engagement', 'Women\'s Issues', 'Youth Mentorship'],
      socialLinks: {
        email: 'julie@muorotofm.co.ke'
      }
    },
    {
      name: 'Ambitious Alice',
      role: 'Afternoon Host & Youth Advocate',
      bio: 'Energetic presenter hosting Kuoya Kuoya and Kinandu gia Kigooco programs. Focuses on youth empowerment and contemporary issues.',
      image: "https://images.unsplash.com/photo-1592826388743-bdc138b34ed0",
      alt: 'Friendly African man in casual shirt with warm smile in community center environment',
      expertise: ['Youth Programs', 'Entertainment', 'Social Issues', 'Modern Culture'],
      socialLinks: {
        email: 'alice@muorotofm.co.ke'
      }
    },
    {
      name: 'Njeri wa Kanyugi',
      role: 'Evening Host & Community Coordinator',
      bio: 'Community-focused broadcaster hosting Muoroto Xpress and Imbere Imbere programs. Strong advocate for local development and empowerment.',
      image: "https://images.unsplash.com/photo-1612831199117-a3aa88c5badc",
      alt: 'Young African woman with braided hair in colorful top working on laptop in creative workspace',
      expertise: ['Community Development', 'Evening Entertainment', 'Local News', 'Social Programs'],
      socialLinks: {
        email: 'njeri@muorotofm.co.ke'
      }
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-vibrant-orange rounded-xl flex items-center justify-center shadow-glassmorphic">
              <Icon name="UserGroupIcon" size={24} className="text-white" />
            </div>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            The passionate individuals behind Muoroto FM's success, each bringing unique expertise 
            and unwavering commitment to our mission of authentic broadcasting.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glassmorphic rounded-2xl p-6 hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105">

              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-glassmorphic">
                  <AppImage
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover" />

                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-success rounded-full border-2 border-white shadow-glassmorphic"></div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="font-headline-medium text-xl text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="font-body-medium text-primary mb-3">
                  {member.role}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1 bg-muted rounded-full font-body text-xs text-muted-foreground">

                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              {member.socialLinks &&
                <div className="flex items-center justify-center space-x-3">
                  {member.socialLinks.email &&
                    <a
                      href={`mailto:${member.socialLinks.email}`}
                      className="w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300">

                      <Icon name="EnvelopeIcon" size={16} />
                    </a>
                  }
                  {member.socialLinks.twitter &&
                    <a
                      href={member.socialLinks.twitter}
                      className="w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300">

                      <Icon name="AtSymbolIcon" size={16} />
                    </a>
                  }
                  {member.socialLinks.linkedin &&
                    <a
                      href={member.socialLinks.linkedin}
                      className="w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300">

                      <Icon name="UserIcon" size={16} />
                    </a>
                  }
                </div>
              }
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 glassmorphic rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Team Members', value: '25+', icon: 'UsersIcon' },
              { label: 'Years Experience', value: '80+', icon: 'AcademicCapIcon' },
              { label: 'Languages Spoken', value: '5', icon: 'ChatBubbleLeftRightIcon' },
              { label: 'Community Awards', value: '12', icon: 'TrophyIcon' }
            ].
              map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mx-auto">
                    <Icon name={stat.icon as any} size={20} className="text-primary-foreground" />
                  </div>
                  <div className="font-headline text-2xl text-primary">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;