import { prisma } from '@/lib/prisma';
import { PortfolioData, Project, UserSocialLinks } from '@/types';

export async function getPortfolioData(): Promise<PortfolioData | null> {
  try {
    const userId = process.env.USER_ID;

    if (!userId) return null;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        Project: true,
        Experience: true,
      },
    });

    if (!user) return null;

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        bio: user.bio ?? "",
        skillsets: user.skillsets,
        socialLinks: typeof user.socialLinks === 'string'
          ? JSON.parse(user.socialLinks as string) as UserSocialLinks
          : (user.socialLinks as UserSocialLinks) ?? {},
      },
      projects: user.Project.map((project: Project) => ({
        id: project.id,
        title: project.title,
        description: project.description,
        techStacks: project.techStacks,
        image: project.image,
        githubLink: project.githubLink,
        liveLink: project.liveLink,
        linkedinLink: project.linkedinLink ?? "",
      })),
      experiences: user.Experience.map((exp) => ({
        id: exp.id,
        image: exp.image ?? "",
        title: exp.title,
        company: exp.company,
        location: exp.location ?? "",
        startDate: exp.startDate,
        endDate: exp.endDate,
        description: exp.description ?? "",
      }))
    };
  } catch (err) {
    console.error("Error loading portfolio:", err);
    return null;
  }
}
