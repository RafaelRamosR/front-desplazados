export const globalConfig = {
  cadrItemData: {
    users: {
      nombre: 'Nombre completo',
      id_municipio_residencia: 'Residencia',
      fecha_nacimiento: 'Fecha de nacimiento',
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
    getAllPath: 'get_all_personas',
    getById: 'get_persona',
    addPath: 'add_persona',
  },
  motive: {
    getAllPath: 'get_all_motivo_desplazamiento',
    getById: 'get_motivo_desplazamiento',
    addPath: 'add_motivo_desplazamiento',
  },
  displaced: {
    getAllPath: 'get_all_desplazados',
    getById: 'get_desplazados',
    addPath: 'add_desplazado',
  }
}
