import React from 'react'
import SectionTitle from '../../ui-components/general-ui/SectionTitle'
import PreviewIcon from '/assets/icons/preview.svg'
import PreviewImg from '../../ui-components/products-ui/PreviewImg'
import PreviewTitle from '../../ui-components/products-ui/PreviewTitle'
import PreviewBio from '../../ui-components/products-ui/PreviewBio'

export default function PreviewProduct({previewImg}) {
  return (
    <section className=" bg-soft-black py-6  rounded-lg">
      <div className="mx-6 flex justify-between items-center mb-8">
        <SectionTitle titleText="Preview" titleColor="bg-uranian-blue" />
        
        <img src={PreviewIcon} alt='Preview' />
      </div>

      <div className='mx-6 space-y-4'>
        <PreviewImg previewImg={previewImg}/>
        <PreviewTitle />
        <PreviewBio />
      </div>

    </section>
  )
}
