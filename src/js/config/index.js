export const globalConfig = {
  cadrItemData: {
    users: {
      nombre                  : 'Nombre completo',
      municipio_residencia    : 'Residencia',
      fecha_nacimiento        : 'Fecha de nacimiento',
    },
    motive: {
      motivo                   : 'Motivo desplazamiento',
    },
    displaced: {
      nombre_persona           : 'Nombre completo',
      municipio_desplazamiento : 'Lugar de desplazamiento',
      fecha_desplazamiento     : 'Fecha de desplazamiento',
    }
  },
  users: {
    createPath   : 'add_persona',
    readAllPath  : 'get_all_personas',
    readByIdPath : 'get_persona',
    updatePath   : 'update_persona',
    deletePath   : 'delete_persona',
  },
  motive: {
    createPath   : 'add_motivo_desplazamiento',
    readAllPath  : 'get_all_motivo_desplazamiento_obj',
    readByIdPath : 'get_motivo_desplazamiento',
    updatePath   : 'update_motivo_desplazamiento',
    deletePath   : 'delete_motivo_desplazamiento',
  },
  displaced: {
    createPath   : 'add_desplazado',
    readAllPath  : 'get_all_desplazados',
    readByIdPath : 'get_desplazados',
    updatePath   : 'update_desplazados',
    deletePath   : 'delete_desplazados',
  }
}
