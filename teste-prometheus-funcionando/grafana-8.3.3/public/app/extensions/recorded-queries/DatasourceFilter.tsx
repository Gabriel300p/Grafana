import React from 'react';
import { Button, InlineField, InlineFieldRow, InlineFormLabel, useStyles2 } from '@grafana/ui';
import { css } from '@emotion/css';
import appConfig from 'app/core/config';
import { DataSourcePicker } from '@grafana/runtime';
import { DataSourceInstanceSettings, DataSourceSettings, GrafanaTheme2 } from '@grafana/data';

type Props = {
  onChange: (ds?: DataSourceSettings) => void;
  value?: string;
};

export const DataSourceFilter = (props: Props) => {
  const { onChange, value } = props;
  const styles = useStyles2(getStyles);

  return (
    <InlineFieldRow className={styles.filter}>
      <InlineFormLabel width={'auto'}>Filter by data source</InlineFormLabel>
      <InlineField>
        <DataSourcePicker
          width={30}
          placeholder="Select a data source"
          onChange={(newSettings: DataSourceInstanceSettings) => {
            onChange({ name: newSettings.name, id: newSettings.id } as DataSourceSettings);
          }}
          noDefault={true}
          current={value}
        />
      </InlineField>
      <InlineField>
        <Button
          className={styles.button}
          icon={'trash-alt'}
          variant={'secondary'}
          onClick={() => {
            onChange(undefined);
          }}
        />
      </InlineField>
    </InlineFieldRow>
  );
};

const getStyles = (theme: GrafanaTheme2) => {
  return {
    filter: css`
      margin-bottom: ${appConfig.theme.spacing.md};
    `,
    button: css`
      color: ${theme.colors.text.secondary};
    `,
  };
};
