export const globalConfig = {
  cadrItemData: {
    users: {
      id_municipio_residencia: 'Residencia',
      fecha_nacimiento: 'Fecha de nacimiento',
      nombre: 'Nombre completo',
    },
    motive: {
      motivo_desplazamiento: 'Motivo desplazamiento',
    },
    displaced: {
      id_persona: 'Nombre completo',
      id_municipio_desplazamiento: 'Lugar de desplazamiento',
      fecha_desplazamiento: 'Fecha de desplazamiento',
    }
  },
  users: {
    addPath: 'add_persona',
    deletePath: 'delete_persona',
    getAllPath: 'get_all_personas',
    getById: 'get_persona',
  },
  motive: {
    addPath: 'add_motivo_desplazamiento',
    deletePath: 'delete_motivo_desplazamiento',
    getAllPath: 'get_all_motivo_desplazamiento',
    getById: 'get_motivo_desplazamiento',
  },
  displaced: {
    addPath: 'add_desplazado',
    deletePath: 'delete_desplazados',
    getAllPath: 'get_all_desplazados',
    getById: 'get_desplazados',
  }
}
