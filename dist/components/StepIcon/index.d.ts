import React from 'react';
interface StepIconProps {
    isCompletedStep?: boolean;
    isCurrentStep?: boolean;
    isError?: boolean;
    isLoading?: boolean;
    isKeepError?: boolean;
    icon?: React.ComponentType<any>;
    index: number;
    checkIcon?: React.ComponentType<any>;
}
export declare const StepIcon: import("@chakra-ui/system").ComponentWithAs<"div", StepIconProps>;
export {};
