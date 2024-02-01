import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="container mx-auto relative">
      <section className="mx-auto flex flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="mb-3 text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-6xl lg:leading-[1.1] md:block">
          Contact Us
        </h1>
        <div className="pt-16 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-5">
          <div className="md:w-6/12">
            <div className="">
              <h4 className="font-semibold tracking-tight text-2xl md:text-4xl">
                Why you should contact us
              </h4>
              <p className="mt-2 text-lg leading-7 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                recusandae voluptates doloremque veniam temporibus porro culpa
                ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.
              </p>
              <dl className="mt-8 max-w-xl space-y-4 text-base leading-7 lg:max-w-none">
                <div className="pl-6">
                  <dt className="inline font-semibold">
                    &#128222; Phone: +91 125 256 452
                  </dt>
                </div>
                <div className="pl-6">
                  <dt className="inline font-semibold">
                    &#128229; Mail:{" "}
                    <a
                      href="mailto:info@bigspring.com"
                      className="text-muted-foreground"
                    >
                      info@adzigital.com
                    </a>
                  </dt>
                </div>
                <div className="pl-6">
                  <dt className="inline font-semibold">
                    &#127969; Address: 21B Main rd, Ranchi, India
                  </dt>
                </div>
              </dl>
            </div>
          </div>
          <div className="md:w-6/12">
            <div className="flex flex-col space-y-4 md:space-y-6">
              <div className="md:flex md:space-x-4">
                <div className="md:w-6/12">
                  <Label htmlFor="first-name">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    className="h-12"
                    placeholder="First Name"
                    type="text"
                  />
                </div>
                <div className="md:w-6/12">
                  <Label htmlFor="last-name">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input className="h-12" placeholder="Last Name" type="text" />
                </div>
              </div>
              <div className="col-12 md:mt-6">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  className="h-12"
                  id="email"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className="col-12 md:mt-6">
                <Label htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  placeholder="Type your message here."
                  className="h-24"
                />
              </div>
              <Button className="btn btn-primary mt-8 w-40" variant={"cyan"}>
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
