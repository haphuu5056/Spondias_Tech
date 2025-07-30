import { teamMembers } from "../../constants";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

export function TeamSection() {
  return (
    <section className="py-24 bg-gray-50 font-body">
      <div className="container ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Badge
            variant="solidPrimary"
            className=" px-4 py-2 uppercase rounded-full "
          >
            Team Members{" "}
          </Badge>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-bold text-gray-900 mb-4">
            Our Exceptional Team
          </h2>
          <p className="text-lg text-gray-600">
            Meet our outstanding team - a synergy of talent, creativity, and
            dedication, crafting success together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6 mx-auto">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-100">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-300 "
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              {/* <p>{member.bio}</p> */}
              {/* <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Link
                    to={member.social.twitter}
                    className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <Twitter className="w-4 h-4 text-gray-700" />
                  </Link>
                  <Link
                    to={member.social.linkedin}
                    className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-4 h-4 text-gray-700" />
                  </Link>
                  <Link
                    to={member.social.email}
                    className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-4 h-4 text-gray-700" />
                  </Link>
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
