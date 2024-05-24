import { title } from "@/components/primitives";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { Spacer } from "@nextui-org/spacer";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title({ color: "pink" })}>About Me&nbsp;</h1>
      <Spacer y={5} />
      <p className="full-width text-xl w-500 maxWidth-100%">
        I am a Junior Software Developer and former technical project manager
        with a background in systems engineering. I hold a Bachelor of Computer
        Science with Honors from the University of Maryland. I excel in
        enhancing application performance and user satisfaction through my
        leadership and technical skills. I specialize in developing, optimizing,
        and leading technology solutions, particularly in cloud environments and
        .net. With a solid foundation in advanced mathematics and a commitment
        to continual learning, I am adept at navigating complex, data-driven
        environments. I am eager to bring my diverse skill set to contribute to
        Acuity’s innovative and collaborative team.
      </p>
      <Spacer y={5} />
      <h3 className="text-xl">
        Junior Software Developer
        <br />
        May 2023 - Current
        <br />
        <Popover>
          <PopoverTrigger>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white"
            >
              Learn More
            </Button>
          </PopoverTrigger>
          <PopoverContent className="text-lg">
            Converted a vendor integrated process from API calls and file
            ingestion to event based flow using Azure service bus queues for
            creating orders, receiving results, and uploading images.
            <br></br>
            Established myself as the primary developer for two of our .NET
            applications.
            <br></br>
            Supported and successfully completed migration efforts from MSSQL to
            PostgreSQL.
            <br></br>
            Added observability events to our applications and configured New
            Relic thresholds for alerting the team.
          </PopoverContent>
        </Popover>
      </h3>
      <Spacer y={5} />
      <h3 className="text-xl ">
        IT Project Manager
        <br />
        Mar 2022 - Feb 2023
        <br />
        <Popover>
          <PopoverTrigger>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white"
            >
              Learn More
            </Button>
          </PopoverTrigger>
          <PopoverContent className="text-lg text-black">
            Developed a .NET desktop application in WPF and C# to allow internal
            stakeholders to query and filter private data sets fetched from an
            API.
            <br></br>
            Contributed to software quality engineering by validating user
            stories and conducting thorough regression testing, resulting in
            substantial enhancements to release stability.
            <br></br>
            Managed a skilled team of developers, fostering an environment of
            collaboration, growth, and excellence.
            <br></br>
            Orchestrated the product backlog, prioritization of features, and
            ensured timely delivery of user stories.
          </PopoverContent>
        </Popover>
      </h3>
      <Spacer y={5} />
      <h3 className="text-xl">
        Secondary Math Teacher
        <br />
        Aug 2017 - Jan 2022
        <br />
        <Popover>
          <PopoverTrigger>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white"
            >
              Learn More
            </Button>
          </PopoverTrigger>
          <PopoverContent className="text-lg">
            Instructed advanced mathematics, leveraging analytical skills to
            boost student performance in AP Calculus and Honors Pre-calculus by
            10%.
            <br></br>
            Conducted peer evaluations and provided feedback, leading to a 15%
            improvement in teaching methodologies and classroom management.
          </PopoverContent>
        </Popover>
      </h3>
    </div>
  );
}
