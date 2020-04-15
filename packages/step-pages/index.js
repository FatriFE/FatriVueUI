const titleList = []

const stepPage = {
  name: 'fa-step-pages',
  functional: true,
  render(_, context) {
    console.log(context)
    const active = context.props.active || 0
    const children = context.children.filter(vn => !!vn.tag)
    titleList[active] = children[active].data.attrs.label

    children[active].componentOptions.listeners && children[active].componentOptions.listeners.create && children[active].componentOptions.listeners.create()

    const header = _('div', 'header' + titleList.join('>>'))
    return active ? [header, children[active]] : children[active]
  }
}

stepPage.install = Vue => {
  Vue.component(stepPage.name, stepPage)
}
export default stepPage
