import React from 'react';
import { Formik } from 'formik';
import { Input, Button, Select} from '@chakra-ui/react';

export function DashboardMenu({
    history,
    guildId,
    user,
    config,
    roles,
    updatePrefix,
    updateRuoloMuted,
}) {
    const ruoloMutedId = config.ruoloMutedID ? config.ruoloMutedID : '';
    return (
        <div>
            <Formik
                initialValues={{ prefix: config.prefix, }}
                onSubmit={({ prefix }) => {
                    updatePrefix(prefix);
                }}
            >
                {
                    (props) => (
                        <form onSubmit={props.handleSubmit} >
                            <Input type="text" name="prefix" onChange={props.handleChange} defaultValue={config.prefix} />
                            <Button type="submit" colorScheme="green" children="Update Prefix" />
                        </form>
                    )
                }

            </Formik>
            <Formik
                initialValues={{ ruoloMutedID: ruoloMutedId }}
                onSubmit={({ ruoloMutedID }) => { updateRuoloMuted(ruoloMutedID) }}
            >
                {
                    (props) => (
                        <form onSubmit={props.handleSubmit}>
                            <Select name="ruoloMutedID" onChange={props.handleChange}>
                                {roles.map((role) => (
                                    <option value={role.id} selected={role.id === ruoloMutedId}>{role.name}</option>
                                ))}
                            </Select>
                            <Button type="submit" colorScheme="green" children="Update Role" />
                        </form>
                    )
                }

            </Formik>
        </div>
    )
}