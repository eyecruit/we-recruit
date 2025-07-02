import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.1),transparent_65%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl py-3 sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
            >
              The Future of Technology is Here
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Discover cutting-edge solutions that transform the way you interact with technology. Powerful, intuitive,
              and designed for the future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 sm:px-8 py-4 sm:py-6 rounded-full text-sm sm:text-lg font-medium shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-full max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-3xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl">
              <div className="relative h-[300px] md:h-[500px] w-full bg-gray-950 p-4 overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-300">System Status: Online</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-gray-800 hover:bg-gray-700 p-1 rounded">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex border-b border-gray-800 mb-4">
                  <button className="px-4 py-2 text-sm font-medium text-purple-400 border-b-2 border-purple-500">
                    Overview
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-300">Analytics</button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-300">Reports</button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-300">Settings</button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[
                    { label: "Total Users", value: "24,521", change: "+12%", color: "text-green-500" },
                    { label: "Revenue", value: "$42,500", change: "+8%", color: "text-green-500" },
                    { label: "Active Sessions", value: "1,293", change: "-3%", color: "text-red-500" },
                    { label: "Conversion Rate", value: "12.3%", change: "+2%", color: "text-green-500" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 p-3 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
                    >
                      <div className="text-xs text-gray-400">{stat.label}</div>
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className={`text-xs ${stat.color} flex items-center gap-1`}>
                        {stat.change}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d={
                              stat.change.startsWith("+")
                                ? "M12 19V5M12 5L5 12M12 5L19 12"
                                : "M12 5V19M12 19L19 12M12 19L5 12"
                            }
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 mb-4 h-[120px] md:h-[180px] relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium">Revenue Overview</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <span className="text-xs text-gray-400">This Month</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-xs text-gray-400">Last Month</span>
                      </div>
                    </div>

                    {/* Interactive Chart */}
                    <div className="h-[80px] md:h-[120px] flex items-end">
                      {[35, 45, 30, 60, 75, 45, 55, 70, 60, 75, 85, 65].map((height, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center group">
                          <div className="relative w-full">
                            <div
                              className="w-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors rounded-sm cursor-pointer"
                              style={{ height: `${height}%` }}
                            >
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                ${Math.floor(height * 120)}: {index + 1} Jan
                              </div>
                            </div>
                          </div>
                          <div className="text-[8px] text-gray-500 mt-1">{index + 1}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Table */}
                  <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                    <div className="p-3 border-b border-gray-800 flex justify-between items-center">
                      <h3 className="text-sm font-medium">Recent Transactions</h3>
                      <button className="text-xs text-purple-400 hover:text-purple-300">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-950">
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">ID</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Customer</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Amount</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Status</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                          {[
                            {
                              id: "#TRX-5632",
                              customer: "John Smith",
                              amount: "$125.00",
                              status: "Completed",
                              date: "Today, 2:30 PM",
                            },
                            {
                              id: "#TRX-5631",
                              customer: "Alice Johnson",
                              amount: "$250.00",
                              status: "Pending",
                              date: "Today, 11:15 AM",
                            },
                            {
                              id: "#TRX-5630",
                              customer: "Robert Brown",
                              amount: "$350.00",
                              status: "Completed",
                              date: "Yesterday, 3:45 PM",
                            },
                          ].map((transaction, index) => (
                            <tr key={index} className="hover:bg-gray-800/50 cursor-pointer">
                              <td className="px-4 py-2 text-xs">{transaction.id}</td>
                              <td className="px-4 py-2 text-xs">{transaction.customer}</td>
                              <td className="px-4 py-2 text-xs">{transaction.amount}</td>
                              <td className="px-4 py-2 text-xs">
                                <span
                                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                    transaction.status === "Completed"
                                      ? "bg-green-900/30 text-green-400"
                                      : "bg-yellow-900/30 text-yellow-400"
                                  }`}
                                >
                                  {transaction.status}
                                </span>
                              </td>
                              <td className="px-4 py-2 text-xs text-gray-400">{transaction.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
}  