import React from 'react'

import { slugify } from '../../../../base/utils'

export const Tags = ({tags = []}) => (
    <div className="article-detail-tags">
        {
            tags.map(tag =><p key={`tag-${slugify(tag)}`}>{tag}</p>)
        }
    </div>
)