import DashboardPage, { DashboardPageProps } from "../../components/PageComponents/DashboardPage/DashboardPage";
import React, { FC } from "react";

import MockAppProvider from "../MockProvider/MockProvider";

export default {
    component: DashboardPage,
    title: "PageComponents/DashboardPage",
};

interface StoryTemplate extends FC<DashboardPageProps> {
    args?: Partial<DashboardPageProps>;
}

const Template: StoryTemplate = (args) => (
    <MockAppProvider>
        <DashboardPage {...args} />
    </MockAppProvider>
);

export const DashboardActive = Template.bind({});
DashboardActive.args = {
    isActive: true,
};

export const DashboardInactive = Template.bind({});
DashboardInactive.args = {
    isActive: false,
};