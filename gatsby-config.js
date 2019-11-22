module.exports = {
  plugins: [
    {
      resolve: "@matthieuauger/gatsby-theme-meetup",
      options: {
        meetupName: "CSS Paris",
        meetupHomepageHeadline: "Super meetup",
        meetupDotComGroupUrlName: "CSS-Paris",
        displayVideosLink: false,
        talkProposalUrl: "#",
        dateFormat: `dddd DD MMMM YYYY`,
        textBlocksPath: `${__dirname}/src/text-blocks`,
        translations: {
          PROPOSE_A_TALK: "Propose a talk →",
          FETCH_VIDEOS: "See videos →",
          LAST_MEETUPS: "Last meetups",
          REGISTER_ON_MEETUP: "Register on Meetup →"
        },
        currentMeetupColor: "#EFCC74",
        pastMeetupColors: ["#E6BB91", "#DDDEC4", "#F3DBD1"]
      }
    }
  ]
};
