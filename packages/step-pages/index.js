const titleList = [] // 面包导航

const stepPage = {
  name: 'fa-step-pages',
  functional: true,
  render(_, { props, children, parent }) {
    let active = props.active || 0
    const _children = children.filter(vn => !!vn.tag)
    const showHeader = typeof props.header === 'undefined' ? true : typeof props.header === 'string' ? true : props.header
    titleList[active] = _children[active].data.attrs.label

    _children[active].componentOptions &&
      _children[active].componentOptions.listeners &&
      _children[active].componentOptions.listeners.create &&
      _children[active].componentOptions.listeners.create()

    const header = showHeader
      ? _(
          'div',
          {
            style: {
              backgroundColor: '#eee',
              lineHeight: '36px',
              padding: '0 20px'
            }
          },
          titleList.map((title, _index) => {
            if (_index > active) return null
            if (titleList.length > 1) {
              if (_index === active) {
                return _(
                  'el-button',
                  {
                    props: {
                      type: 'text',
                      disabled: true
                    }
                  },
                  title
                )
              } else {
                return _(
                  'el-button',
                  {
                    props: {
                      type: 'text'
                    },
                    on: {
                      click: () => {
                        parent.active = _index
                      }
                    }
                  },
                  title + ' >> '
                )
              }
            }
          })
        )
      : null
    return active ? [header, _children[active]] : _children[active]
  }
}

stepPage.install = Vue => {
  Vue.component(stepPage.name, stepPage)
}
export default stepPage
