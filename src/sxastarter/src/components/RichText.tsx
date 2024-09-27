import React from 'react';
import { Field, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs/utils';

interface Fields {
  Text: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.Text} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = props.params.RenderingIdentifier;

  const resp = fetch(getPublicUrl() + "/api/custom/test");
  const resp2 = fetch("/api/custom/test");
  console.log(getPublicUrl());

  resp.then(intResp =>{
    //const text = resp2.text;
    console.log("Request with getPublicUrl method:");
    console.log(intResp);
  });

  resp2.then(intResp2 =>{
    console.log("Request without getPublicUrl method:");
    console.log(intResp2);
  });

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="component-content">{text}</div>
    </div>
  );
};
