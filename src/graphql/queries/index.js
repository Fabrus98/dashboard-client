import { gql } from '@apollo/client';

export const menuPageQuery = gql`
    query getMenuPageQuery {
        getUser {
            discordId
            discordTag
            avatar
        }
        getMutualGuilds {
            included {
                name
                id
            }
            excluded {
                name
                id
            }
        }
    }
`;

export const dashboardPageQuery = gql`
    query getDashboardPageData($guildId: String!) {
        getUser {
            discordId
            discordTag
            avatar
        }
        getGuildConfig(guildId: $guildId) {
            guildId
            serverName
            prefix
            ruoloStandardID
            ruoloMutedID
            ruoliAssegnabili
            logChannelID
            minorLogChannelID
            globalLogChannelID
            reportChannelID
            adminTrackerValue
            unmuteTime
        }
        getGuildRoles(guildId: $guildId) {
            id
            name
        }
    }
`;